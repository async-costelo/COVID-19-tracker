import React from 'react';
import { 
  Grid, 
  Image, 
  Statistic 
} from 'semantic-ui-react';

const GridHeader = () => {
  return (
    <Grid columns={3} divided>
      <Grid.Row>
        <Grid.Column>
          <Image src="https://cdn.frankerfacez.com/emoticon/434366/4" size="small" verticalAlign='middle' />
          <Statistic color='yellow' inverted>
            <Statistic.Value>28</Statistic.Value>
            <Statistic.Label>Confirmed Cases</Statistic.Label>
          </Statistic>
        </Grid.Column>
        <Grid.Column>
          <Image src="https://cdn.frankerfacez.com/emoticon/61496/4" size="small" verticalAlign='middle' />
          <Statistic color='green' inverted>
            <Statistic.Value>28</Statistic.Value>
            <Statistic.Label>Survived</Statistic.Label>
          </Statistic>
        </Grid.Column>
        <Grid.Column>
          <Image src="https://cdn.frankerfacez.com/emoticon/425196/4" size="small" verticalAlign='middle' />
          <Statistic color='red' inverted>
            <Statistic.Value>28</Statistic.Value>
            <Statistic.Label>Deaths</Statistic.Label>
          </Statistic>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

export default GridHeader;