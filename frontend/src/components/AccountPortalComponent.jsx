import React, { useState } from 'react'

const AccountPortalComponent = () => {
  const [active, setActive] = useState(0);
  const [activeTab, setActiveTab] = useState(0);

  const handleClick = (index) => {
    setActive(index)
  }

  const handleTabClick = (index) => {
    setActiveTab(index)
  }

  const tabData = [
    {
      title: 'AccountDetails',
      list: [
        {
          title: 'My Details'
        },
        {
          title: 'Change Password'
        },
        {
          title: 'Address Book'
        },
      ]
    },


    {
      title: 'Your Orders',
      list: [
        {
          title: 'Active Orders'
        },
        {
          title: 'Previous Orders'
        },
      ]
    }

  ]

  return (
    <section>
      <div className='container mx-auto px-4'>
        <div className='grid grid-cols-12 '>
          <div className='md:col-span-4 col-span-12 border-r-2 border-grey-400'>
            <h3>  Welcome, john    </h3>
            <p>Here you can view and track past orders, and control the emails we send you. You can also manage the account details we use to speed you through checkout.</p>

            {tabData?.map((data, i) => {
              return (
                <div key={i}>
                  <div className='bg-[#F5F5F5] p-3 rounded' onClick={() => handleClick(i)}> {data?.title} </div>

                  {active === i ?
                    <>
                      {data?.list?.map((list, index) => {
                        return (
                          <div key={index} className='bg-[#fff] p-3 rounded'
                            onClick={() => handleTabClick(index)}>
                            {list?.title}
                          </div>
                        )
                      })}
                    </>
                    : ""}
                </div>
              )
            })}

          </div>
          <div className='md:col-span-8 col-span-12'>
            {active === 0 &&
              <>
                {activeTab == 0 &&
                  <>activeTab0</>
                }
                {activeTab == 1 &&
                  <>activeTab1</>
                }
                {activeTab == 2 &&
                  <>activeTab2</>
                }
              </>
            }

            {active === 1 &&
              <>
                {activeTab == 0 &&
                  <>0activeTab</>
                }
                {activeTab == 1 &&
                  <>1activeTab</>
                }

              </>
            }


          </div>

        </div>
      </div>
    </section>
  )
}

export default AccountPortalComponent
