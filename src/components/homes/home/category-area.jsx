import { Certificate, Instructor, OnlineClass, User } from '../../../svg';

const category_contents = [
  { icon: <OnlineClass/>, title: '3020', subtitle: 'PTE Coaching' },
  { icon: <Instructor/>, title: 'Top', subtitle: 'PTE Certified Trainer' },
  { icon: <Certificate/>, title: 'Online', subtitle: 'Free PTE Practice' },
  { icon: <User/>, title: '6000', subtitle: 'Exam Simulation Mock Test Scoring' },
]

const CategoryArea = () => {
    return (
        <div className="features-area-2">
            <div className="container">
                <div className="features-grid-wrap">
                    {category_contents.map((category, i) => (
                        <div key={i} className="features-box features-style-2 edublink-svg-animate">
                            <div className="icon">
                                {category.icon}
                            </div>
                            <div className="content">
                                {/* <h5 className="title"><span>{category.title}</span>{category.subtitle}</h5> */}
                                <h5 className="title">{category.subtitle}</h5>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default CategoryArea;