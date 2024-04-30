import React from 'react'
import CustomCard from './Card';


const cardData = [
    {
      title: 'Card 1',
      text: 'This is the content of Card 1.',
      imageUrl: 'https://plus.unsplash.com/premium_photo-1669497495583-d552beb8ece4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZnJlZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'Card 2',
      text: 'This is the content of Card 2.',
      imageUrl: 'https://media.istockphoto.com/id/1330179038/photo/eagle-flies-at-high-altitude-with-its-wings-spread-out-on-a-sunny-day-in-the-mountains.webp?b=1&s=170667a&w=0&k=20&c=GkIIiiQJ2UlS9RpVb-P0wTz3Fqi8TtCDS_poWkDTZik=',
    },
    {
      title: 'Card 3',
      text: 'This is the content of Card 3.',
      imageUrl: 'https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGZyZWV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
        title: 'Card 4',
        text: 'This is the content of Card 3.',
        imageUrl: 'https://images.unsplash.com/photo-1504194104404-433180773017?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGZyZWV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
      },
      {
        title: 'Card 5',
        text: 'This is the content of Card 3.',
        imageUrl: 'https://media.istockphoto.com/id/1411212387/photo/thank-you-my-god.webp?b=1&s=170667a&w=0&k=20&c=oRl_gGVSUKlo6i819-3VYBXZQKSWHCGlwIhJtMGuhx8=',
      },
      {
        title: 'Card 6',
        text: 'This is the content of Card 3.',
        imageUrl: 'https://media.istockphoto.com/id/1405730723/photo/empty-asphalt-road-and-new-year-2023-concept-driving-on-an-empty-road-to-goals-2023-with.webp?b=1&s=170667a&w=0&k=20&c=xn2OFq_1n9KNM8OdUzIxKBH949UOqe5M4_VQ7XAcvwQ=',
      },{
        title: 'Card 6',
        text: 'This is the content of Card 3.',
        imageUrl: 'https://media.istockphoto.com/id/1405730723/photo/empty-asphalt-road-and-new-year-2023-concept-driving-on-an-empty-road-to-goals-2023-with.webp?b=1&s=170667a&w=0&k=20&c=xn2OFq_1n9KNM8OdUzIxKBH949UOqe5M4_VQ7XAcvwQ=',
      },{
        title: 'Card 6',
        text: 'This is the content of Card 3.',
        imageUrl: 'https://media.istockphoto.com/id/1405730723/photo/empty-asphalt-road-and-new-year-2023-concept-driving-on-an-empty-road-to-goals-2023-with.webp?b=1&s=170667a&w=0&k=20&c=xn2OFq_1n9KNM8OdUzIxKBH949UOqe5M4_VQ7XAcvwQ=',
      },{
        title: 'Card 6',
        text: 'This is the content of Card 3.',
        imageUrl: 'https://media.istockphoto.com/id/1405730723/photo/empty-asphalt-road-and-new-year-2023-concept-driving-on-an-empty-road-to-goals-2023-with.webp?b=1&s=170667a&w=0&k=20&c=xn2OFq_1n9KNM8OdUzIxKBH949UOqe5M4_VQ7XAcvwQ=',
      },{
        title: 'Card 6',
        text: 'This is the content of Card 3.',
        imageUrl: 'https://media.istockphoto.com/id/1405730723/photo/empty-asphalt-road-and-new-year-2023-concept-driving-on-an-empty-road-to-goals-2023-with.webp?b=1&s=170667a&w=0&k=20&c=xn2OFq_1n9KNM8OdUzIxKBH949UOqe5M4_VQ7XAcvwQ=',
      },{
        title: 'Card 6',
        text: 'This is the content of Card 3.',
        imageUrl: 'https://media.istockphoto.com/id/1405730723/photo/empty-asphalt-road-and-new-year-2023-concept-driving-on-an-empty-road-to-goals-2023-with.webp?b=1&s=170667a&w=0&k=20&c=xn2OFq_1n9KNM8OdUzIxKBH949UOqe5M4_VQ7XAcvwQ=',
      },{
        title: 'Card 6',
        text: 'This is the content of Card 3.',
        imageUrl: 'https://media.istockphoto.com/id/1405730723/photo/empty-asphalt-road-and-new-year-2023-concept-driving-on-an-empty-road-to-goals-2023-with.webp?b=1&s=170667a&w=0&k=20&c=xn2OFq_1n9KNM8OdUzIxKBH949UOqe5M4_VQ7XAcvwQ=',
      },{
        title: 'Card 6',
        text: 'This is the content of Card 3.',
        imageUrl: 'https://media.istockphoto.com/id/1405730723/photo/empty-asphalt-road-and-new-year-2023-concept-driving-on-an-empty-road-to-goals-2023-with.webp?b=1&s=170667a&w=0&k=20&c=xn2OFq_1n9KNM8OdUzIxKBH949UOqe5M4_VQ7XAcvwQ=',
      },{
        title: 'Card 6',
        text: 'This is the content of Card 3.',
        imageUrl: 'https://media.istockphoto.com/id/1405730723/photo/empty-asphalt-road-and-new-year-2023-concept-driving-on-an-empty-road-to-goals-2023-with.webp?b=1&s=170667a&w=0&k=20&c=xn2OFq_1n9KNM8OdUzIxKBH949UOqe5M4_VQ7XAcvwQ=',
      },{
        title: 'Card 6',
        text: 'This is the content of Card 3.',
        imageUrl: 'https://media.istockphoto.com/id/1405730723/photo/empty-asphalt-road-and-new-year-2023-concept-driving-on-an-empty-road-to-goals-2023-with.webp?b=1&s=170667a&w=0&k=20&c=xn2OFq_1n9KNM8OdUzIxKBH949UOqe5M4_VQ7XAcvwQ=',
      },{
        title: 'Card 6',
        text: 'This is the content of Card 3.',
        imageUrl: 'https://media.istockphoto.com/id/1405730723/photo/empty-asphalt-road-and-new-year-2023-concept-driving-on-an-empty-road-to-goals-2023-with.webp?b=1&s=170667a&w=0&k=20&c=xn2OFq_1n9KNM8OdUzIxKBH949UOqe5M4_VQ7XAcvwQ=',
      },{
        title: 'Card 6',
        text: 'This is the content of Card 3.',
        imageUrl: 'https://media.istockphoto.com/id/1405730723/photo/empty-asphalt-road-and-new-year-2023-concept-driving-on-an-empty-road-to-goals-2023-with.webp?b=1&s=170667a&w=0&k=20&c=xn2OFq_1n9KNM8OdUzIxKBH949UOqe5M4_VQ7XAcvwQ=',
      },{
        title: 'Card 6',
        text: 'This is the content of Card 3.',
        imageUrl: 'https://media.istockphoto.com/id/1405730723/photo/empty-asphalt-road-and-new-year-2023-concept-driving-on-an-empty-road-to-goals-2023-with.webp?b=1&s=170667a&w=0&k=20&c=xn2OFq_1n9KNM8OdUzIxKBH949UOqe5M4_VQ7XAcvwQ=',
      },{
        title: 'Card 6',
        text: 'This is the content of Card 3.',
        imageUrl: 'https://media.istockphoto.com/id/1405730723/photo/empty-asphalt-road-and-new-year-2023-concept-driving-on-an-empty-road-to-goals-2023-with.webp?b=1&s=170667a&w=0&k=20&c=xn2OFq_1n9KNM8OdUzIxKBH949UOqe5M4_VQ7XAcvwQ=',
      },{
        title: 'Card 6',
        text: 'This is the content of Card 3.',
        imageUrl: 'https://media.istockphoto.com/id/1405730723/photo/empty-asphalt-road-and-new-year-2023-concept-driving-on-an-empty-road-to-goals-2023-with.webp?b=1&s=170667a&w=0&k=20&c=xn2OFq_1n9KNM8OdUzIxKBH949UOqe5M4_VQ7XAcvwQ=',
      },{
        title: 'Card 6',
        text: 'This is the content of Card 3.',
        imageUrl: 'https://media.istockphoto.com/id/1405730723/photo/empty-asphalt-road-and-new-year-2023-concept-driving-on-an-empty-road-to-goals-2023-with.webp?b=1&s=170667a&w=0&k=20&c=xn2OFq_1n9KNM8OdUzIxKBH949UOqe5M4_VQ7XAcvwQ=',
      },{
        title: 'Card 6',
        text: 'This is the content of Card 3.',
        imageUrl: 'https://media.istockphoto.com/id/1405730723/photo/empty-asphalt-road-and-new-year-2023-concept-driving-on-an-empty-road-to-goals-2023-with.webp?b=1&s=170667a&w=0&k=20&c=xn2OFq_1n9KNM8OdUzIxKBH949UOqe5M4_VQ7XAcvwQ=',
      },{
        title: 'Card 6',
        text: 'This is the content of Card 3.',
        imageUrl: 'https://media.istockphoto.com/id/1405730723/photo/empty-asphalt-road-and-new-year-2023-concept-driving-on-an-empty-road-to-goals-2023-with.webp?b=1&s=170667a&w=0&k=20&c=xn2OFq_1n9KNM8OdUzIxKBH949UOqe5M4_VQ7XAcvwQ=',
      }
  ];

export default function CardsContainer() {
  return (
    <div className="row m-5">
      {cardData.map((card, index) => (
        <div key={index} className="col-md-4 mt-2">
          <CustomCard
            imageUrl={card.imageUrl}
            title={card.title}
            text={card.text}
            
          />
        </div>
      ))}
    </div>
    
  )
}
