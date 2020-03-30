/*** 
   Add your global variables that store the DOM elements you will 
   need to reference and/or manipulate. 
   
   But be mindful of which variables should be global and which 
   should be locally scoped to one of the two main functions you're 
   going to create. A good general rule of thumb is if the variable 
   will only be used inside of a function, then it can be locally 
   scoped to that function.
***/
// I created two global variables which store the list items and number of students that will be displayed 
const studentlistitems = document.getElementsByClassName ('student-item')
const itemsperpage = 10;


 
// this `showPage` function hides all of the items in each page list except for the ten that need to be shown.
const showPage = (list, page) => { 
   let start = (page * itemsperpage) - itemsperpage;
   let end = (page * itemsperpage)-1;
/// created a for loop for the paginagtion which will show only the items i wish to display///
/// changed the error  in my for loop which stated <= list.length; instead of < list.length;
   for(i=0; i < list.lenght; i++)
   {
      //Inside the loop, display any list item with if the
      //index is greater than or equal to the start index variable and less than the end index variable.
      if ( i>=start && i <= end){

      list[i].style.display= 'block'

} else{
        list[i] .style.display= 'none'
}
   }
}

const appendPageLinks = (list) => {

   // Determine how many pages are needed for the list by  dividing the total number of items by the max number of items per page
   // used the math.ceil function to round the number passed as parameter to its nearest interger in upward direction towards the greater value
   const neededPages = Math.ceil(list.length / itemsperpage);


   const div = document.getElementsByClassName("div");

   

   // In your appendPageLinks function you are trying to get the div 
   // but it doesn't exist yet. You should be creating it.


   //  Give the div element a className of pagination in order for i
   div.className = 'pagination';

   // You are trying to select the ul but like the div you need 
  //  to create it then you can append it to the div you created.

   //  Add a ul to the “pagination” div to store the pagination links
   const ul = document.getElementsByClassName("ul");


   // Append the newly created ul to the div with class of pagination
   div.appendChild(ul);


   // Get hold of the parent div that the newly created div will be appended to
   // but I am using document.querySelector since I am just bringing back one element.
   
   let parentDiv = document.querySelector(".page");
   parentDiv.appendChild(div);


   // Declare variable for <a></a> tags
   let links;
   //  Loop over pagination links to remove active class from all links

         for(i = 1; i <= neededPages; i++){
            
   // Create <a></a> elements
   links = document.createElement("a");

   // Create li element
   let li = document.createElement('li');

   // Give <a></a> elements href value of '#'
   links.href = '#';

    links.textContent = i;

   // Append the <a></a> elements variable (links) to the li
   li.appendChild(links)

   // The li will then be appened to the ul tht was created outside of the current for-loop
   ul.appendChild(li)
                  

   // Add event listener to <a></a> tags Add an event listener to each a tag. When they are clicked
  //  call the showPage function to display the appropriate page
   links.addEventListener('click', (e)=>{

   const pageLinks = document.querySelectorAll('.pagination a')
   
   for(let i =0; i < pageLinks.length; i++){
   pageLinks[i].className = ''
   }
   let activeClass = event.target;     
   activeClass.className = 'active';  
   showPage(list,event.target.textContent)

   // Add the active class to the link that was just clicked. You can identify that
   // clicked link using event.target
                                 
})

}

}
//  calling my functions
showPage (studentlistitems,1)
appendPageLinks(studentlistitems)








