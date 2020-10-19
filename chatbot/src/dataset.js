const defaultDataset = {
    "init": {
        answers: [
            {content: "自己紹介をお願いします。", nextId: "my_self"},
            {content: "他に、portfolioあるの？", nextId: "portfolio"},
            {content: "最後に...", nextId: "message"},
        ],
        question: "Reactチャットボットへ、ようこそ！！",
    },
    "my_self": {
        answers: [
            {content: "他に、portfolioあるの？", nextId: "portfolio"},
            {content: "最初の質問に戻る", nextId: "init"}
        ],
        question: "年齢は、22歳。前職は営業してました！最近の幸せは、映画観賞をしながら、軟骨唐揚げとハイボールを飲むことです！！",
    },
    "portfolio": {
        answers: [
            {content: "githubのurlはこちら", nextId: "github"},
            {content: "最初の質問に戻る", nextId: "init"}
        ],
        question: "モバイルファーストのポートフォリオがあるよ！  githubでクローンしてね！",
    },
    "message": {
        answers: [
            {content: "最初の質問に戻る", nextId: "init"},
        ],
        question: "こんな、くだらないチャットボットを見ていただき、本当にありがとうございました🙇‍♂️",
    },
    "github": {
        answers: [
            {content: "最初の質問に戻る", nextId: "init"}
        ],
        question: "https://github.com/ryota4729/chatbot.git",
    },
}

export default defaultDataset