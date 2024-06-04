import React from 'react';
import { Container, Grid, Paper, CardMedia, CardContent, Typography } from '@mui/material';

// Sample data for past events
const events = [
  {
    title: 'Food drive at stop and shop',
    description: "On December 10, 2023, the United Youth Foundation (UYF) had our first event. We partnered with Island Harvest at a food drive in Hicksville's Stop & Shop. UYF volunteers distributed flyers and collected donations, including food, cash, toiletries, and gift cards. Their efforts resulted in 900 lbs of food and over $500 in donations, providing substantial support to families in need. By encouraging shoppers to purchase and donate items from the flyers, UYF significantly contributed to the community, demonstrating the impact of collaborative action in addressing food insecurity.",
    image: require('./beach.jpg')
  },
  {
    title: 'Volunteer at Island harvest’s Food distribution',
    description: "On February 3, 2024, Jericho Branch volunteers partnered with Island Harvest to assemble and distribute nutritious food packages containing vegetables, dairy, meats, and fruits to families in need and veterans. The volunteers personally loaded the packages into the recipients' cars, offering direct assistance and a human touch to their act of giving. This experience was a profound one for the Jericho Aylus members, serving as a powerful reminder of the value of daily sustenance and the impact of community support, reinforcing their appreciation for the basic necessities of life and the importance of aiding those less fortunate.",
    image: require('./beach.jpg')
  },
  {
    title: 'Baked goods for residents of Ronald McDonald house',
    description: "On March 3rd, 2024, members of the Jericho AYLUS branch dedicated their time to the Ronald McDonald House, a renowned organization that provides essential support to families traveling far from home to obtain medical care for their children. Participating in the \"Treats From the Heart\" program, the volunteers utilized the kitchen facilities at Ronald McDonald House to engage in a heartwarming baking session. Over the course of two hours, they skillfully prepared an array of homemade cookies and brownies. This initiative not only offered a comforting gesture to the families staying at the facility but also allowed the AYLUS members to contribute directly to the well-being and upliftment of those going through challenging times, adding a touch of home and warmth to their stay.",
    image: require('./beach.jpg')
  },
  {
    title: 'Dune grass planting at Tobay Beach',
    description: "On Saturday, March 30th, 2024, members of the Jericho UYF dedicated their day to an environmental conservation effort at Tobay Beach. Their primary activity was planting Dune Grass, a plant known for its robust root system and ability to stabilize sand dunes, thereby playing a critical role in shoreline protection. This initiative is particularly significant as it aims to mitigate the impact of coastal winds, which can be harsh and potentially damaging. By reinforcing the dunes with Dune Grass, the Jericho Aylus Branch is not only working to prevent erosion but also to create a more hospitable environment for a variety of other plant species. The success of such an endeavor contributes to the biodiversity of the area and supports the overall health of the coastal ecosystem. This event reflects the community's commitment to environmental stewardship and highlights the importance of proactive measures in safeguarding our natural shorelines.",
    image: require('./beach.jpg')
  }
];

function PastEvents() {
  return (
    <Container>
      <Typography variant="h3" component="h1" align="center" gutterBottom>
        Past Events
      </Typography>
      <Grid container spacing={4} justifyContent="center" mt={2}>
        {events.map((event, index) => (
          <Grid item key={index} xs={12}>
            <Paper elevation={3}>
              <Grid container spacing={2}>
                {index % 2 === 0 ? (
                  <>
                    <Grid item xs={12} md={8}>
                      <CardContent>
                        <Typography variant="h5" component="h2">
                          {event.title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                          {event.description}
                        </Typography>
                      </CardContent>
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <CardMedia
                        component="img"
                        alt={event.title}
                        height="200"
                        image={event.image}
                        style={{ borderRadius: '10px' }}
                      />
                    </Grid>
                  </>
                ) : (
                  <>
                    <Grid item xs={12} md={4}>
                      <CardMedia
                        component="img"
                        alt={event.title}
                        height="200"
                        image={event.image}
                        style={{ borderRadius: '10px' }}
                      />
                    </Grid>
                    <Grid item xs={12} md={8}>
                      <CardContent>
                        <Typography variant="h5" component="h2">
                          {event.title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                          {event.description}
                        </Typography>
                      </CardContent>
                    </Grid>
                  </>
                )}
              </Grid>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default PastEvents;
