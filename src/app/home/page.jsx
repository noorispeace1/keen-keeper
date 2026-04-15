import Friends from '@/components/homepage/Friends';

import friendsData from '@/../public/data.json'; 

const HomePage = async () => {
    
    
    
    console.log(friendsData); 

    return (
        <>
            <div className='w-9/12 mx-auto mt-10'>
                <h1 className='text-2xl font-bold mb-5'>Your Friends</h1>

                <div className='grid grid-cols-1 md:grid-cols-4 gap-5'>
                    {
                        
                        friendsData.map(item => (
                            <Friends key={item.id} item={item} />
                        ))
                    }
                </div>
            </div>
        </>
    );
};

export default HomePage;