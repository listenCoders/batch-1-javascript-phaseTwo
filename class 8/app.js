// array object

cardInfo = [
    {
        cardName : "M Sabid",
        age : 22,
        img : "https://scontent.fdac7-1.fna.fbcdn.net/v/t39.30808-6/265981732_118866687286705_2847747225152803824_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGFZ9uiUPqVBRFMcC5LOzzTQ3dA8-zyvGxDd0Dz7PK8bAj7xRNDs0O4GoRot412M3Qq33PrinY240ExMinc7a8Y&_nc_ohc=ZjKBN-W8-RcAX8RH3VN&_nc_ht=scontent.fdac7-1.fna&oh=00_AT_PqNO2uXjakSpaFYGE0253t8bgw0yMmXzD62DraHaxcg&oe=62A1CC01",
    },

    {
        cardName : "Mahmood Hassan Rameem",
        age : 20,
        img : 'https://scontent.fdac7-1.fna.fbcdn.net/v/t1.6435-9/120149086_371597627347184_8819678821991159398_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFnPyUZZeYNGzXZMkQ2Gg7uyfE16BSA6DLJ8TXoFIDoMhbFFViLquxb_VwoiggZ3Cgy9e-jwVj9qhvrpLY08z_U&_nc_ohc=Z3U1Hb9xz_8AX9aTOuN&_nc_ht=scontent.fdac7-1.fna&oh=00_AT-I5el-fF-p0UW6cM83f0RVvztY6LOf9eYuv2cjIB0Ucg&oe=62C0FF44',
    },

    {
        cardName : "Ratul Taskin",
        age : 20,
        img : 'https://scontent.fdac7-1.fna.fbcdn.net/v/t39.30808-1/212283912_561788934843226_5184310504215473630_n.jpg?stp=c0.0.200.200a_dst-jpg_p200x200&_nc_cat=100&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeGk4sVTscOEhLrkIX3G1ixjPvOV9eEKRXY-85X14QpFdp7c4amGIstGgBEU2Qlxk-mEIEz-xJ6a6L26d1mcShOY&_nc_ohc=28RF2q7PajQAX99HcFu&_nc_ht=scontent.fdac7-1.fna&oh=00_AT_8izHh2JqIAfbuXfW0iZd6cAWoUS_r1zDh_dgU05ifHA&oe=62A13871',
    },

    {
        cardName : "Moniya Bilashi",
        age : 22,
        img : 'https://scontent.fdac7-1.fna.fbcdn.net/v/t39.30808-1/277562646_489358049302175_717717863399339864_n.jpg?stp=c0.46.200.200a_dst-jpg_p200x200&_nc_cat=100&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeFow1ZVYs2nz8GQPNa31zeKoo72sSp_o_iijvaxKn-j-MsHCSZYdwcTokM9ypJHQPsHYWV_DHm_rJGSDuhXtnkN&_nc_ohc=LhC8-4ur1XAAX-5XB5c&_nc_ht=scontent.fdac7-1.fna&oh=00_AT_Tv4C-_t66cHWwCQkktKi2X8u4PbLIvSa7ZNMJG9rkcw&oe=62A19A7E',
    },

    {
        cardName : "MD Jahurul Islam",
        age : 22,
        img: "https://scontent.fdac7-1.fna.fbcdn.net/v/t1.6435-1/50183063_2346707218896572_2601806388082507776_n.jpg?stp=c0.0.200.200a_dst-jpg_p200x200&_nc_cat=105&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeGpjU_hd2q8OGhsTGzlvKc9kaAbMly9iwORoBsyXL2LA1P9ox66wmb9EX_ORMTl1DgQH1RCNoOat7o5vG9kc6dK&_nc_ohc=E8qFiI_ycNcAX-XECbi&_nc_ht=scontent.fdac7-1.fna&oh=00_AT8JSE_jHeiiXeIxFOYKiajmrUnaFa70oWaQvrNRb3oXgQ&oe=62C2C71C"
    }
]

const cards = document.getElementById("cards");

const loadData = () => {
    cardInfo.map(card => {
        const cardElement = document.createElement("div");
        cardElement.classList.add("card");

        cardElement.innerHTML = `
        
            <img src="${card.img}" alt="">

            <h2>${card.cardName}</h2>
            <p>${card.age} Years old</p>
        
        `;

        cards.appendChild(cardElement);
    })
}
loadData();

