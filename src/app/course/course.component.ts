import { Component } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent {
courses = [
  {id:101,name:'Javascript for biginers',auther:'John Heikela', duration:'2 months', type:'Free', price:0.00, rating:3.45,image:"https://media.geeksforgeeks.org/wp-content/cdn-uploads/20220714150931/JavaScript-Introduction.jpg"},
  {id:102,name:'Angular for biginers',auther:'John Heikela', duration:'3 months', type:'Premium', price:0.00, rating:3.45,image:"https://www.freecodecamp.org/news/content/images/size/w2000/2022/09/angular.png"},
  {id:103,name:'React for biginers',auther:'John Heikela', duration:'3 months', type:'Premium', price:0.00, rating:3.45,image:"https://bs-uploads.toptal.io/blackfish-uploads/components/blog_post_page/content/cover_image_file/cover_image/687822/retina_800x320_cover-react-context-api-4929b3703a1a7082d99b53eb1bbfc31f.png"},
  {id:104,name:'Javascript for biginers',auther:'John Heikela', duration:'2 months', type:'Free', price:0.00, rating:3.45,image:"https://media.geeksforgeeks.org/wp-content/cdn-uploads/20220714150931/JavaScript-Introduction.jpg"},
  {id:105,name:'Angular for biginers',auther:'John Heikela', duration:'3 months', type:'Free', price:0.00, rating:3.45,image:"https://www.freecodecamp.org/news/content/images/size/w2000/2022/09/angular.png"},
  {id:106,name:'React for biginers',auther:'John Heikela', duration:'3 months', type:'Premium', price:0.00, rating:3.45,image:"https://bs-uploads.toptal.io/blackfish-uploads/components/blog_post_page/content/cover_image_file/cover_image/687822/retina_800x320_cover-react-context-api-4929b3703a1a7082d99b53eb1bbfc31f.png"},
  {id:107,name:'Javascript for biginers',auther:'John Heikela', duration:'2 months', type:'Premium', price:0.00, rating:3.45,image:"https://media.geeksforgeeks.org/wp-content/cdn-uploads/20220714150931/JavaScript-Introduction.jpg"},
  {id:108,name:'Angular for biginers',auther:'John Heikela', duration:'3 months', type:'Free', price:0.00, rating:3.45,image:"https://www.freecodecamp.org/news/content/images/size/w2000/2022/09/angular.png"},
  {id:109,name:'React for biginers',auther:'John Heikela', duration:'3 months', type:'Free', price:0.00, rating:3.45,image:"https://bs-uploads.toptal.io/blackfish-uploads/components/blog_post_page/content/cover_image_file/cover_image/687822/retina_800x320_cover-react-context-api-4929b3703a1a7082d99b53eb1bbfc31f.png"},
 
 
]

getTotalCources(){
  return this.courses.length
}
getTotalFreeCourses(){
  return this.courses.filter(course=>
    course.type === 'Free'
  ).length
}
getTotalPremiumCourses(){
  return this.courses.filter(course => course.type === 'Premium' ).length
}

courseCountRadioButtons:string = 'All';

onFilterRadioButtonsChanged(data:string){
  this.courseCountRadioButtons = data;
  console.log(this.courseCountRadioButtons)
}

searchText:string='';

onSearchTextEnter(searchValue:string){
  this.searchText = searchValue;
}
}
