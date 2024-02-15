import { DashboardFirstComponent } from './DashboardFirstComponent'
import { DashboardSecondComponent } from './DashboardSecondComponent'
import { AnnouncementComponent } from './AnnouncementComponent'
import { RecentActivityComponent } from './RecentActivityComponent'
import { UpcomingScheduleComponent } from './UpcomingScheduleComponent'
import '../../App.css'
export const Dashboard = () => {
  return (
    <div className="db">
      <div className="container-122">
        <div className="container-122-1" id="WsSvFy1bezTVVwz4H1SduP">
          <div className="container-122-2" id="1:117">
            Dashboard
          </div>
        </div>
        <DashboardFirstComponent />
        <DashboardSecondComponent />
        <AnnouncementComponent />
      </div>
      <div className="container-123">
        <RecentActivityComponent />
        <UpcomingScheduleComponent date2="Today,13 Sep 2021" />
      </div>
    </div>
  )
}
