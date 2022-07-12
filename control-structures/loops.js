 for (let i = 0; i < 10; i++){
 console.log(i);
 }
 
   const users =['Karim','Max','Michael'];
    for ( const user of users ){
        
        console.log(user);
    }
     
    const newUsers =['Karim','Max','Amer'];
for (let j=0; j<newUsers.length; j++){

    console.log(newUsers[j]);
}

const loggedInUsers = {
    name: 'Karim', age: 32 ,isAdmin: true
};

for( const propName in loggedInUsers){

    //console.log(propName);
    console.log(loggedInUsers[propName]);
}
