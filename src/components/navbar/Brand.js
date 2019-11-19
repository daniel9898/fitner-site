import React from 'react'
import styled from "styled-components";

import logo from "../../assets/group-14.png";

const Brand = () => {
    return (
        <Image src={logo} alt="Company Logo" />
    )
}

export default Brand

const Image = styled.img`
  height: 35px;
  margin: auto 0;
`;