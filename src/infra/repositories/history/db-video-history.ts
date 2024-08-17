import {
  AddHistory,
  AddHistoryTypes,
} from "@/usecases/protocols/db/db-add-history-protocols";
import { getCollection } from "../../db/helper/in-db-memory-server";

export class UserVideoHistory implements AddHistory {
  async add(params: AddHistoryTypes.Params): Promise<AddHistoryTypes.Response> {
    const accountCollection = getCollection("history");
    const result = await accountCollection.insertOne({
      userId: params.user,
      ...params.data,
    });
    return result.insertedId.toString();
  }

  async findAll(
    params: AddHistoryTypes.FindParam
  ): Promise<AddHistoryTypes.FindResponse[]> {
    const historyCollection = getCollection("history");
    const skip = (parseInt(params.page) - 1) * parseInt(params.pageSize);
    const cursor = historyCollection
      .find({ userId: params.userId })
      .sort({ timestamp: -1 })
      .skip(skip)
      .limit(parseInt(params.pageSize));
    const results = await cursor.toArray();

    const mappedResults = results.map((doc) => ({
      _id: doc._id.toString(),
      userId: doc.userId,
      videoId: doc.videoId,
      videoTitle: doc.videoTitle,
      thumb: doc.thumb,
      dateViewed: doc.dateViewed,
    }));
    return mappedResults;
  }
}
