## Projeto de Aprendizado de Inglês com YouTube e GPT: API Open-Source

Este é um projeto open-source desenvolvido em Node.js e TypeScript, projetado para ajudar indivíduos a aprimorar suas habilidades de inglês através de vídeos do YouTube. A API oferece as seguintes funcionalidades:

- **Transcrição de Vídeos do YouTube**: A API é capaz de transcrever automaticamente o conteúdo de vídeos do YouTube, fornecendo texto correspondente ao áudio presente nos vídeos.

- **Tradução para o Inglês**: Além da transcrição, a API utiliza a poderosa tecnologia do GPT (Generative Pre-trained Transformer) para traduzir a transcrição original para o inglês, tornando o conteúdo mais acessível para estudantes de língua inglesa.

- **Dicionário Interativo com GPT**: Implementamos um recurso interativo de dicionário que permite aos usuários clicarem em palavras desconhecidas na transcrição para obter o significado e exemplos de uso, com a ajuda do GPT. Isso ajuda os estudantes a enriquecer seu vocabulário de maneira prática.

- **Recursos Abertos e Customizáveis**: Como um projeto open-source, a API é totalmente personalizável e pode ser adaptada para atender a necessidades específicas de aprendizado de idiomas. Desenvolvedores podem contribuir com melhorias e personalizações.

- **Interface de Programação Simples**: A API é projetada com uma interface de programação de fácil uso, tornando-a acessível para desenvolvedores e criadores de conteúdo que desejam integrar essa funcionalidade em seus aplicativos ou plataformas.

## Lista de Tarefas (To-Do)

- [x] Implementar a funcionalidade de transcrição de vídeos do YouTube.
- [x] Desenvolver um dicionário interativo com GPT para fornecer significados e exemplos de uso de palavras.
- [x] Integração do GPT para traduzir transcrições para o inglês.
- [ ] Suporte a Outras Fontes de Vídeo: Estender a API para suportar serviços de vídeo além do YouTube, ampliando assim as possibilidades de aprendizado.


Este projeto tem como objetivo promover a educação e o aprendizado de inglês de forma acessível e interativa, tirando proveito das vastas fontes de conteúdo disponíveis no YouTube. É uma iniciativa colaborativa que convida a comunidade de desenvolvedores a contribuir para seu crescimento e aprimoramento contínuo.

# Exemplos de uso

## exemplo 1 - Obter transcrição de um vídeo

- Endpoint: /transcription/video/:id
- Método: GET

Resposta de Exemplo:

```json
[
    {
        "title": "Rodrigo Santoro on Heleno and His Heartthrob Status",
        "subtitles": {
            "en": [
                {
                    "start": "0.999",
                    "dur": "9.071",
                    "text": "what is a hard throw oh let's look at"
                },
                {
                    "start": "4.339",
                    "dur": "7.891",
                    "text": "Wiktionary what does that mean I like to"
                },
                {
                    "start": "10.07",
                    "dur": "5.55",
                    "text": "jump in the ocean the very first day of"
                },
                {
                    "start": "12.23",
                    "dur": "6.27",
                    "text": "the year just wash it off everything and"
                },
                // ... Outras entradas de transcrição ...
            ]
        }
    }
]
```

## Exemplo 2 - Obtendo significado de uma palavra

- Endpoint: /api/meaning/word/:word
- Método: GET

Resposta de exemplo: 

buscando o significado da palavra whatever

```json
{
  statusCode: 200,
  body: 'A palavra "whatever" em inglês pode ser descrita resumidamente como uma expressão usada para indicar indiferença, desinteresse ou para deixar uma decisão ou escolha em aberto.'
}

```

## Observações:

Projeto ainda em desenvolvimento, ainda há funcionalidades a serem implementadas, porém a base está concluída, podendo ser usada para consumo em um frontend.