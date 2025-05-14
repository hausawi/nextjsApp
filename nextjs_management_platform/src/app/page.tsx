const Homepage = () => {
  return (
    <div className='flex item-center justify-center w'>
    Go to ...
    <h3 className="text-blue-700">
      <a href="https://hausawi.github.io/hcccs/dashboard/admin">
      CLICK HERE
      </a>
    </h3> to see the change ONLINE OR ...  
    <h3 className="text-blue-700">
      <a href="http://localhost:3000/dashboard/admin">
       CLICK HERE 
      </a>
    </h3> ...to see the changes LOCALLY
      </div>
  )
}

export default Homepage
