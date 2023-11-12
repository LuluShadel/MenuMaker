export const USER_PROFILE = "USER_PROFILE"

export const userProfile = () => ({
    type : USER_PROFILE
  })

export const newUser=(email,password,lastName,firstName,userName) => {
    
    return async (dispatch) => {


        const userData = {
            email,
            password,
            lastName,
            firstName,
            userName,
        };
        console.log(userData)
        try {
        
            const response = await fetch("http://localhost:3001/api/v1/user/signup", {
                method:'POST',
                headers:{
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
                

            })
            const data = await response.json();
            

            if (response.status===200) {
                console.log(data, "fetch sign up ok ")
                  dispatch({ 
                    type : USER_PROFILE,
                    payload: userData
                  })
            }
            
            }
            catch {
                console.error("error sign up")
            }    
        
    }
    }