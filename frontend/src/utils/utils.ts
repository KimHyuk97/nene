export const optionNaming = (name: string): string => {
    if(name === "BONE") return "뼈";
    if(name === "BONELESS") return "순살";
    if(name === "HOT") return "HOT";
    if(name === "LEG") return "다리";
    if(name === "WING") return "날개";
    if(name === "HALF") return "반반";
    if(name === "COMBO") return "콤보";
    return "";
}