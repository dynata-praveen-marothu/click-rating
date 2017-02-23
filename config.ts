namespace clickrating{
export class Config{

     state ={
         activeItem : null
     }
     params = {
        qid:"AAA"
    }

    items = [
        { precode: "1" , label: "APPLE"},
        { precode: "2" , label: "GOOGLE"},
        { precode: "3" , label: "MICROSOFT"},
        { precode: "4" , label: "FACEBOOK"},
    ]

    scales = [
        { precode: "1" , label: "Very Poor"},
        { precode: "2" , label: "Poor"},
        { precode: "3" , label: "Acceptable"},
        { precode: "4" , label: "Good"},
        { precode: "5" , label: "Very Good"},
    ]


}}
