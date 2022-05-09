function getBotResponse(input) {
   //DETAILS
   if (input == "vision statement")
    {
       return "To create and promote holistic and integrated development in rural women by imparting quality higher education. The vision stated above is translated into action through the following Mission statements"
    }
    else if (input == "mission statement")
     {
       return "To enable students to achieve academic excellence through efficient teaching, meticulous learning and systematic evaluation. To enable students through relevant programmes and practices emerge as economically independent, personally upright, morally sound, culturally refined, spiritually aware and rich, socially responsible, nationally conscious, worldly wise, willing to transform and engender meaningful social transformation.";
     } 
    else if (input == "motto")
    {
       return "Our College Emblem Synchronizes the chief guidelines of life-Act, Arise and Activate";
    }
   else if (input=="courses"|| input=="departments")
   {
       return " 19 UG courses (5-Aided, 14 unaided), 12 PG courses (unaided), 10 M.Phil., courses (unaided) and 11 Ph.D., courses (Full Time & Part Time), ";
   }
   else if (input=="ug"||input=="ug courses")
   {
       return " Aided or unaided";
   }

   else if (input=="aided")
   {
       return " 1)	B.A. History 2)	B.Sc. Chemistry 3)B.Sc. Zoology 4)B.Com. 5)B.Sc. Mathematics";
   }
   else if (input=="unaided")
   {
       return " 1)B.Com., 2)B.Sc., Bio Chemistry 3)B.Sc., Micro Biology 4)B.Sc., Nutrition, Food Service Management & Dietetics 5)B.Sc., Computer Science 6)B.C.A. 7)B.Sc., Information System Management 8)B.Sc., Bio – Technology 9)B.A. English 10)B.B.A 11)B.Sc., Psychology 12)B.A. Tamil 13)B.Sc., Mathematics 14)B.Com (CA)";
   }
  

   // Simple responses
  
   if (input == "hi" || input=="hello") 
   {
       return "Hello there!";
   } 
   else if (input == "goodbye" || input=="bye") {
       return "Talk to you later!";
   } 
   else if (input == "thanks"  || input=="thank you") 
   {
    return "Your Welcome!!";
   } 
   else if (input=="mphil")
   {
       return "1)Bio Chemistry 2)Foods & Nutrition 3)Commerce 4)Computer Science 5)English 6)Management Studies 7)Bio Technology  8)Chemistry 9)Mathematics 10)Microbiology ";
   }
   else if (input == "departments") {
       return "ug or pg or mphil or phd";
   }
   else if (input == "university") {
       return "AFFILIATED TO THIRUVALLUVAR UNIVERSITY";
   }  
   else if (input == "contacts" || input== "phone number" || input=="contact") {
       return "Aided - 9488600147 / 9688510584 Unaided - 9489537911 / 9443341270  feel free to call....";
   } 
   else if (input == "address"|| input=="location") {
       return "DKM College Rd Sainathapuram, RV Nagar,Vellore, Tamil Nadu 632001 India";
   }
   else if (input=="pg")
   {
       return " 1)M.Com., 2)M.Sc., Bio Chemistry 3)M.Sc., Bio Technology 4)M.Sc., Applied Microbiology 5)M.Sc., Food & Nutrition 6)M.Sc., Computer science 7)M.Sc., Chemistry 8)M.A., Human Resource Management 9)M.Sc., Mathematics 10)M.A., English 11)M.A., History 12) M.Sc., Zoology";
   }
   else if (input=="phd")
   {
       return " 1)Chemistry (Full Time & Part Time) 2)Commerce ( Full Time & Part Time ) 3)Mathematics ( Full Time & Part Time ) 4)Zoology ( Full Time & Part Time ) 5)History ( Full Time & Part Time ) 6)Microbiology( Full Time & Part Time ) 7)Economics(Part Time ) 8)Tamil( Part Time ) 9)English(Part Time ) 10)Biochemistry( Full Time & Part Time ) 11)Food and Nutrition( Full Time & Part Time ) 12)Library Science(Part Time )";
   }
   
   
   else if (input == "Thank you" || input=="thanks")
   {
        return "Talk to you later!";
   } 
   else 
   {
       return "Try asking something like 'contacts', 'university', 'courses', 'departments', 'mission statement', 'vision statement',  'address'";
   }
   
   


}