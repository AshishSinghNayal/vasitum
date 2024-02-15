import '../../App.css'
import { RecentActivityImplementation } from './RecentActivityImplementation'
export const RecentActivityComponent = ({ datetime, activitycount }) => {
    return (
        <div className="recent-activity" id="WsSykCXxfACx6M8Dk7jgnR">
            <div className="recent-activity1" id="1:123">
                <div className="recent-activity1-1" id="1:132">
                    Recently Activity
                </div>
            </div>
            <RecentActivityImplementation datetime="10.40 AM, Fri Sept 2021" activitycount="12" />
        </div>

    )
}
