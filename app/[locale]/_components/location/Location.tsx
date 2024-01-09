// components
import { Icon } from '../icon/Icon';

// data
import { Portfolio } from '@/models/Portfolio';

export const Location: React.FC = async () => {

  // This is the global object that is built in the build
  const userLocation = await Portfolio.getUserLocation();

  return (
    <div className="flex flex-row items-center">
      <div className="pr-1 w-5">
        <Icon
          id="mappin"
          showToolTip={false}
        />
      </div>
      <div className="flex flex-row">
        <div className='whitespace-nowrap'>
          {userLocation.city}
        </div>
        <div className='mr-1'>,</div>
        <div>
          <span className='hidden md:block'>{userLocation.stateFull}</span>
          <span className='md:hidden'>{userLocation.stateAbbr}</span>
        </div>
      </div>
    </div>
  )
}
