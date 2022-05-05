import React from 'react'
import { Box, Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import styles from 'assets/jss/pages/Home/homeSectionStyle'
import globalStyles from 'assets/jss/PLUTEX'
import videoSrc from 'assets/images/Home/video.mp4'

const useStyles = makeStyles(styles)
const useGlobalStyles = makeStyles(globalStyles)

const HomeSection = () => {
  const classes = useStyles()
  const globalClasses = useGlobalStyles()
  return (
    <Box className={classes.homeSectionArea}>
      <Box className={classes.videoPlayer}>
        <video width="100%" height="auto" loop muted autoPlay>
          <source src={videoSrc} type="video/mp4" />
        </video>
      </Box>
      <Box className={classes.homeContainer}>
        <Box className={classes.container}>
          {/* <Box className={classes.homeImage}> */}
          <Box className={classes.content}>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <Typography className={classes.title}>What is The Funky Horse Pub?</Typography>
              <Typography className={globalClasses.text21}>
                Welcome to Funkyworld. Funkyworld is a world where crazy and coolly dressed
                Funky horses live. Funky horses spend most of their days partying, playing crazy
                games, and drinking lemonade on Funky Horsepub, but they don't realize the great
                danger that awaits them, and this danger is called Dr.Grumpy. Dr.Grumpy hates
                everything that's fun, unlike Funkyhorses, he spends most of his day at parties, playing
                games with lemonade and drinking strawberry wine with his cat by the fireplace and
                also listening to classical music and sleeping early. Dr. Grumpy's house is a few
                blocks away from Funky Horsepub, and one day there is a big party at Funky
                Horsepub, they play crazy games and drink lemonade. The party is so loud that the
                sound of the party is heard all over the Funky World, during which Dr.Grumpy is
                sleeping soundly in his bed, Grumpy wakes up to the noise of the party and shouts at
                them to turn off the music from his window, but the sound of the music is so loud that
                no one hears it. Dr.Grumpy was angry about this. Grumpy can no longer tolerate the
                parties held by Funky horses, he decides to destroy the Pub to bring a permanent
                solution to this situation, for which he makes madbots in his workshop and sends
                them to Funky Horsepub.
              </Typography>
            </Grid>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default HomeSection
