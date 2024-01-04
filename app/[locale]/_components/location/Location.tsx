// components
import { Icon } from '../icon/Icon';

// data
import me from '@/app/data/me.json';
import location from '@/app/data/location.json';

export const Location: React.FC = () => {

  return (
    <div className="flex flex-row items-center">
      <div className="pr-1 w-5">
        <Icon
          id={location.icon.id}
          showToolTip={false}
        />
      </div>
      <div className="flex flex-row">
        <div className='whitespace-nowrap'>
          {me.location.city}
        </div>
        <div className='mr-1'>,</div>
        <div>
          {me.location.state}
        </div>
      </div>
    </div>
  )
}
