import React from 'react'
import img1 from '../../assets/images/le1.png'
import img2 from '../../assets/images/zk.png'
import img3 from '../../assets/images/ri1.png'
import imgw3 from '../../assets/images/web3.png'
import imgSao from '../../assets/images/saogalaxy.png'
import '../Mission/index.css'

const Mission = () => {
  return (
    <div>
      <div style={{ width: '100%' }}>
        <div id='main-miss' className='main-content'>
          <div className='container mb-5'>
            <h1 className='content_title mb-6 text-gradient'>
              OXOA - Platform <br></br> Built for Web3 Indie Games
            </h1>

            <p>In 2021, &gt;96% of games on Steam are indies, but they generate only 28% of total revenues</p>
          </div>
          <div className='container-indea container-mobile container  justify-content-around align-items-center '>
            <div className='mr-auto p-4'>
              <img className='img-auto' src={img1} alt='' />
            </div>
            <div className='mr-auto p-4'>
              <img className='img-auto' src={img2} alt='' />
            </div>
            <div className='mr-auto p-4'>
              <img className='img-auto' src={img3} alt='' />
            </div>
          </div>
          <div className='container container-indea'>
            <h2 className='note_title'>Many indie studios are running on tight budgets</h2>
            <p className='md:text-[24px] font-semibold pb-3 p_tile'>Which makes it harder for them to make a profit.</p>
            <p className='pb-3 lg:max-w-[90%] mx-auto p_content_game_text'>
              Game production is a time-consuming and costly process, and because of the low success rate of games, as
              well as the unpredictability of developing future revenue streams, it is an extremely risky venture for
              investors. Especially in the case of indie gaming studios that are keen on experimenting with novel
              concepts.
            </p>
            <p className='lg:max-w-[90%] mx-auto p_content_game_text'>
              The inability to spend on (performance) marketing, which is often the key source of user acquisition, goes
              hand in hand with the difficulty in recruiting additional finance.
            </p>
          </div>
          <div className='container container-indea'>
            <h2 className='web_3h2 inline-flex mb-10 text-gradient'>Web3 - The promised land for indie games</h2>
            <div className=' container-mobile justify-content-around'>
              <div>
                <p className='p-4 font-semibold bg-gardient-box2'>
                  Indie game developers, stop wasting your time creating a game without gaining profits from it!
                </p>
                <p className='p-4 font-semibold bg-gardient-box2'>
                  Let's find new opportunities in the Web3 world where you can raise funds and earn revenue in many
                  ways: VC, token sales, NFTs sales, in-game economy, and gamer community governance.
                </p>
                <p className='p-4 font-semibold bg-gardient-box2'>
                  The blockchain gaming market size is still very small, only 1/53 times the total market size of the
                  gaming industry, which indicates a huge future growth potential of blockchain gaming.
                </p>
              </div>
              <img className='img-auto' src={imgw3} alt='Web3 - The promised land for indie games' />
            </div>
          </div>
          <div className='container container-indea bg-indea '>
            <h2 className='inline-flex mb-10 text-gradient choosen_text'>Choose Web3 gaming, choose OXOA</h2>
            <div className='p-5 mt-5 container border justify-content-center border-primary rounded border-opacity-25'>
              <div className='d-flex justify-content-center'>
                <p style={{ width: '500px' }} className='text-gradient mb-4'>
                  OXOA reduce the entry barriers for web2 users into web3 through advanced blockchain solutions such as
                  AA wallet and Paymaster.
                </p>
              </div>
              <div className='d-flex  justify-content-around align-items-center'>
                <div className='mr-auto md:order-1 choosen_box'>
                  <p className='text-gradient mb-4 gap-colum '>
                    OXOA reduce the entry barriers for web2 users into web3 through advanced blockchain solutions such
                    as AA wallet and Paymaster.
                  </p>
                </div>

                <div className='py-3 choosen_box'>
                  <img className='img-auto' src={imgSao} alt='' />
                </div>
                <div className='ml-auto md:order-3 choosen_box'>
                  <p className=' text-gradient mb-4 gap-colum '>
                    OXOA shares benefits with the community by participating in the OXOA network operation, ensuring
                    decentralization and equality between players and developers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Mission
