import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 320px;
    gap: 10px;
    padding: 0 8px;
    img {
        width: 100%;
    }
    .options {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0 4px;
        width: max-content;
        span {
            font-size: 12px;
            font-weight: 500;
            border-radius: 4px;
            padding: 4px 6px;
        }
        .bone {
            background: #F5F5F5;
            color: #000000;
        }
        .boneless {
            background: #f1faff;
            color: #009ef7;
        }
        .hot {
            background-color: #fff5f8;
            color: #f1416c;
        }
        .half {
            background-color: #FBFBEF;
            color: #DBA901;
        }
        .combo {
            background-color: rgb(239, 251, 239);
            color: rgb(11, 128, 111);
        }
        .leg {
            background-color: rgb(239, 251, 239);
            color: rgb(11, 128, 111);
        }
        .wing {
            background-color: rgb(239, 251, 239);
            color: rgb(11, 128, 111);
        }
    }
    .title {
        font-size: 18px;
        font-weight: 500;
        color: #212121;
    }
    .discription {
        font-size: 14px;
        font-weight: 400;
        color: #333;
    }
`;