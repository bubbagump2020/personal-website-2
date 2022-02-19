import React from 'react';
/* style and img imports */
import {Title, Container, Grid, Text} from "@mantine/core";
import kevin from '../../img/Kevin_2674.jpg';

/* img css object */
const imgStyle:React.CSSProperties = {
    borderRadius: "100%",
    maxWidth: "50%",
}

const HomePage:React.FC = () => {
    return(
        <Container>
            <Grid grow>
                <Grid.Col span={4}>
                    <img src={kevin} style={imgStyle}/>
                </Grid.Col>
                <Grid.Col span={4}>
                    <Title order={2}>
                        Hello! My Name is Kevin Bagnall
                    </Title>
                    <div>
                        <Text>I am a junior software developer and software engineering student located in Houston, Texas.</Text>
                    </div>
                </Grid.Col>
            </Grid>
        </Container>
    )
}

export default HomePage;