import React from "react";
import Banner from "components/feature/Banner";
import GlobalLayout from "components/layout/GlobalLayout";
import ListContainer from "components/feature/ListContainer";

const MainPage = () => {
	return (
		<GlobalLayout>
			<>
				{/* 배너 */}
				<Banner />
				{/* 추천메뉴 - 닭강정 */}
				<ListContainer title="추천메뉴" category={"best"}/>
				{/* 신메뉴 */}
				<ListContainer title="신메뉴" category={"new"}/>
			</>
		</GlobalLayout>
	);
};

export default MainPage;
