import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import userSchema from '../../schemas/userschema'

export default function ValidatedForm() {

  const { handleSubmit, register, formState: { errors, isSubmitSuccessful } } = useForm({
    mode: "onChange",
    resolver: yupResolver(userSchema)
  });

  function onSubmit(data) {
    console.log(data);
  }

  return (
   
   
   <> 
    
     
      <div className=" container  mb-4 w-full px-4 lg:w-1/2 xl:w-5/12">
              <div className="relative rounded-lg p-8  gradient-border shadow-xl  backdrop-blur-2xl     sm:p-12">
                       
    <form onSubmit={handleSubmit(onSubmit)}>

      <input  className="w-100 rounded border border-stroke px-3.5 py-3 
          text-base text-body-color outline-none mb-1 mt-5    
          focus:border-primary dark:border-dark-3 dark:bg-dark dark:text-dark-6"
          {...register("firstName")} placeholder="First Name" />

     <p style={{color:"red",  }}>{errors.firstName?.message}</p>


      <input className="w-100 rounded border border-stroke px-3.5 py-3 
          text-base text-body-color outline-none mb-1 mt-5
          focus:border-primary dark:border-dark-3 dark:bg-dark dark:text-dark-6"
          {...register("lastName")} placeholder="Last Name" />
        <p style={{color:"red"  }}>{errors.lastName?.message}</p>
     
     
      <input className="w-100 rounded border border-stroke px-3.5 py-3 
          text-base text-body-color outline-none mb-1 mt-5
          focus:border-primary dark:border-dark-3 dark:bg-dark dark:text-dark-6"
          {...register("adress")} placeholder="Please Enter Your Adress and House Number" />
        <p style={{color:"red",  }}>{errors.adress?.message}</p>
     
     
      <input className="w-100 rounded border border-stroke px-3.5 py-3 
          text-base text-body-color outline-none mb-1 mt-5
          focus:border-primary dark:border-dark-3 dark:bg-dark dark:text-dark-6"
          {...register("city")} placeholder="City" />
        <p style={{color:"red",  }}>{errors.city?.message}</p>

      <input className="w-100 rounded border border-stroke px-3.5 py-3 
          text-base text-body-color outline-none mb-1 mt-5
          focus:border-primary dark:border-dark-3 dark:bg-dark dark:text-dark-6"
          {...register("country")} placeholder="Country" />
        <p style={{color:"red",  }}>{errors.country?.message}</p>

      <input className="w-100 rounded border border-stroke px-3.5 py-3 
          text-base text-body-color outline-none mb-1 mt-5
          focus:border-primary dark:border-dark-3 dark:bg-dark dark:text-dark-6"
          type="email" {...register("email")} placeholder="Email Address" />
      <p style={{color:"red",  }}>{errors.email?.message}</p>

      <input className="w-100 rounded border border-stroke px-3.5 py-3 
          text-base text-body-color outline-none mb-1 mt-5
          focus:border-primary dark:border-dark-3 dark:bg-dark dark:text-dark-6"
          type="phone" {...register("phone")} placeholder="Phone Number" />
      <p  style={{color:"red", }}>{errors.phone?.message}</p>
     
     
      <textarea className="w-100 h-40 rounded border border-stroke px-3.5 py-3 
          text-base text-body-color outline-none mb-1 mt-5
          focus:border-primary dark:border-dark-3 dark:bg-dark dark:text-dark-6"
          type="email" {...register("message")} placeholder="Please Enter Your Message" />
      <p style={{color:"red",  }}>{errors.message?.message}</p>

     
     
     <div className="text-2xl ">{isSubmitSuccessful && <p style={{ color: "green"}}>Form submitted successfully!</p>} </div> 
      <button className="w-100 rounded border border-stroke px-3.5 py-3 
          text-base text-foreground outline-none mb-4 mt-4
          focus:border-primary dark:border-dark-3 dark:bg-dark dark:text-dark-6" 
          type="submit">Send Message</button>

      
    </form>
    </div>
    </div>
   
    </>
  );
}