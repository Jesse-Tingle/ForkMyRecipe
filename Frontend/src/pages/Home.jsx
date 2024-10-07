import React from "react"
import Chickpea from "../images/meal-prep.jpg"
import {
	ContainerDiv,
	H1,
	LeftSection,
	RightSection,
} from "../styles/HomeStyles"

const Home = () => {
	return (
		<ContainerDiv>
			<LeftSection className="leftSection">
				<H1>Chickpea Rice Bowl</H1>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam dolore
					eveniet aperiam quaerat ex cum enim assumenda natus sapiente earum
					temporibus facilis quo similique consequatur asperiores, dolorum
					voluptatibus reiciendis possimus.
				</p>
			</LeftSection>

			<RightSection className="rightSection">
				<img src={Chickpea} alt="Chickpea Rice Bowl" />
			</RightSection>
		</ContainerDiv>
	)
}

export default Home
