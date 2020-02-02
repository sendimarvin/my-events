import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor() { }

  getPosts () {
    return SERVICES;
  }

}

const SERVICES = [
  {
    id: 1,
    name: 'Nyege Nyege',
    description: `
      Nyege Nyege is a Luganda word meaning 'the feeling of a sudden uncontrollable urge to move, shake or dance'. 
      The festival's name evokes different meanings among the East African countries. While in Uganda it refers 
      to the uncontrollable urge to dance, Nyege amongst Swahili speakers has sexual connotations
    `,
    image_url: ['/assets/images/nyege.jpg'],
    posted_on: '2019-01-15',
    user_details: {
      user_name: 'Marvin',
      user_prifile_pic: '/assets/images/profile_pic.png'
    }
  },
  {
    id: 2,
    name: 'Silent Disco',
    description: `
      Nyege Nyege is a Luganda word meaning 'the feeling of a sudden uncontrollable urge to move, shake or dance'. 
      The festival's name evokes different meanings among the East African countries. While in Uganda it refers 
      to the uncontrollable urge to dance, Nyege amongst Swahili speakers has sexual connotations
    `,
    image_url: ['/assets/images/silent-disco.jpg'],
    posted_on: '2019-01-15',
    user_details: {
      user_name: 'Marvin',
      user_prifile_pic: '/assets/images/profile_pic.png'
    }
  },
  {
    id: 3,
    name: 'Blankets and wine',
    description: `
      Nyege Nyege is a Luganda word meaning 'the feeling of a sudden uncontrollable urge to move, shake or dance'. 
      The festival's name evokes different meanings among the East African countries. While in Uganda it refers 
      to the uncontrollable urge to dance, Nyege amongst Swahili speakers has sexual connotations
    `,
    image_url: ['/assets/images/blankets.jpg', '/assets/images/blankets.jpg'],
    posted_on: '2019-01-15',
    user_details: {
      user_name: 'Marvin',
      user_prifile_pic: '/assets/images/profile_pic.png'
    }
  },
  {
    id: 4,
    name: 'Burna buoy',
    description: `
      Nyege Nyege is a Luganda word meaning 'the feeling of a sudden uncontrollable urge to move, shake or dance'. 
      The festival's name evokes different meanings among the East African countries. While in Uganda it refers 
      to the uncontrollable urge to dance, Nyege amongst Swahili speakers has sexual connotations
    `,
    image_url: ['/assets/images/burna_boy.jpg'],
    posted_on: '2019-01-15',
    user_details: {
      user_name: 'Marvin',
      user_prifile_pic: '/assets/images/profile_pic.png'
    }
  },

];
