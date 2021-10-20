import React from 'react';
import { Text, View, ImageBackground } from 'react-native';
import StyledButton from '../StyledButton';
import styles from './styles';

const CarItem = (props) => {

    const { name, tagLine, image, tagLineCTA } = props.car;

    return (
        <View style={styles.carContainer}>

            <ImageBackground 
            source={ image }
            style={styles.image}
            />
  
          <View style={styles.titles}>
            <Text style={styles.title}>{ name }</Text>
            <Text style={styles.subtitle}>
              { tagLine }
              <Text style={styles.subtitleCTA}> {tagLineCTA} </Text>
            </Text>
          </View>
  
          <View style={styles.buttonsContainer}>
            <StyledButton 
              type="primary" 
              content={"Custom Order"} 
              onPress={()=>{
                  
              }}
            />
            <StyledButton 
              type="secondary" 
              content={"Existing Inventory"} 
              onPress={()=>{
                  
              }}
            />
          </View>
        </View>
    );
};

export default CarItem;
