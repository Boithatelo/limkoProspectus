import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';

const courses = [
  {
    id: 1,
    title: 'BSC in Information Technology',
    thumbnail: require('./database.png'),
    description: 'The Bachelor of Science in Information Technology (B.Sc. IT) is a four year program which provides students with the applied knowledge and skills needed for careers in the field of information technology (IT).'
  },
  
   
  {
    id: 2,
    title: 'Degree in Tourism Management',
    thumbnail: require('./tourism.png'),
    description: 'Tourism has turned out to be an economic booster contributing to the economic development of many countries over the last few decades. People see holidays as a necessity, and not as luxury in the present scenario. Tourism calls for coordination and cooperation between travel agents, tour operators, and tourists. Tourism has a few major elements − destinations, attractions, sites, accommodation, and all ancillary services.'
  },
  {
    id: 3,
    title: 'Degree in Television and Film',
    thumbnail: require('./film.png'),
    description: 'The Bachelor of Arts in Film and Television prepares students for creative, business, legal and academic careers in film and television. The program integrates historical and critical analysis with industry studies to cultivate informed and responsible media consumers and creators.'
  },
 
  
  {
    id: 7,
    title: 'Diploma in Business Management',
    thumbnail: require('./Business.png'),
    description: 'The Diploma in Business Management is a versatile qualification because it equips you with the knowledge and skills that are necessary to manage the various business functions, such as finances, human resources, marketing and operations.'
  },
  {
    id: 8,
    title: 'Degree in Professional Communication',
    thumbnail: require('./professional.png'),
    description: 'A Bachelor in Professional Communication is an undergraduate degree that provides students with valuable skills for writing and presenting in the public and private sector. Some participants choose to concentrate on writing relevant to journalism, entertainment and advertising outlets.'
  },
  
];

export default function App() {
  const [courseRatings, setCourseRatings] = useState(Array(courses.length).fill(0));

  const handleRateCourse = (index) => {
    const newRatings = [...courseRatings];
    if (newRatings[index] < 6) {
      newRatings[index] += 1;
      setCourseRatings(newRatings);
    }
  };

  return (
    <View style={styles.container}>
      
      <View style={styles.logo}>
        <Image style={styles.image} source={require('./limkokwing.png')} />
        <Text style={styles.header}>Limkokwing University of Creative Technology 2024 Prospectus</Text>
      </View>

      <ScrollView>             

        {courses.map((course, index) => (
          <View key={course.id} style={styles.courseContainer}>
            
            <Image source={course.thumbnail} style={styles.courseThumbnail} />
            
            <View style={styles.courseInfo}>
              <Text style={styles.courseTitle}>{course.title}</Text>
              <Text style={styles.courseDescription}>{course.description}</Text>
              <Text style={styles.courseRating}>Rating: {courseRatings[index]}</Text>
              <TouchableOpacity style={styles.rateButton} onPress={() => handleRateCourse(index)}>
                <Text style={styles.rateButtonText}>Rate +</Text>
              </TouchableOpacity>
            </View>

          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2',
  },

  header: {
    fontSize: 15,
    padding: 5,
    
  },

  logo : {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    flexDirection: 'column',
    padding: 1,
    marginTop: 10,
  },
  
  courseContainer: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#EDE3E4',
  },
  courseThumbnail: {
    width: 50,
    height: 50,
    resizeMode: 'cover',
    marginRight: 50,
    borderRadius: 25
  },
  courseInfo: {
    flex: 1,
  },
  courseTitle: {
    fontSize: 12,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  courseDescription: {
    fontSize: 14,
    color: '#92898A',
  },
  courseRating: {
    fontSize: 14,
    color: '#555',
    marginBottom: 5,
  },
  rateButton: {
    backgroundColor: '#007BFF',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    alignSelf: 'flex-start',
  },
  rateButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
});
