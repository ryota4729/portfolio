const defaultDataset = {
    "init": {
        answers: [
            {content: "自己紹介をお願いします。", nextId: "my_self"},
            {content: "他に、portfolioあるの？", nextId: "portfolio"},
            {content: "黒歴史を教えて欲しい。", nextId: "black_history"},
            {content: "最後に...", nextId: "message"},
        ],
        question: "Reactチャットボットへ、ようこそ！！",
    },
    "my_self": {
        answers: [
            {content: "他に、portfolioあるの？", nextId: "portfolio"},
            {content: "黒歴史を教えて欲しい。", nextId: "black_history"},
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
    "black_history": {
        answers: [
            {content: "それでも、好き。", nextId: "like"},
            {content: "嫌い。", nextId: "hate"},
            {content: "最初の質問に戻る", nextId: "init"}
        ],
        question: "しょうがないな〜。小学校の頃、掃除の時間に雑巾崖を本気でしていたら、夢中になり過ぎて女の子のお尻に突っ込んでしまいました。幸せでした。あっ、違う！？すみませんでした🙇‍♂️",
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
    "like": {
        answers: [
            {content: "最初の質問に戻る", nextId: "init"}
        ],
        question: "ありがとうございます〜(T_T)",
    },
    "hate": {
        answers: [
            {content: "最初の質問に戻る", nextId: "init"}
        ],
        question: "ごめんなさ〜い(T_T)",
    }
}

export default defaultDataset