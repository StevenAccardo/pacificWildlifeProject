import React from 'react';
import pelRelease from '../../../assets/images/pelRelease.jpg';
import racoonPair from '../../../assets/images/racoonPair.jpg';

export default () => {
  return(
    <div className="aboutUs">
      <h1 className="aboutUs__title">
        About Us
      </h1>
      <div className="aboutUs__statementContainer">
        <h3 className="aboutUs__statement">
          Pacific Wildlife Project is a grassroots non-profit 501(c)(3) humane group incorporated in 1986 by a group of concerned citizens, veterinarians, and wildlife professionals. Operating on an all-volunteer staff, the Project treats more than 2,000 animals a year.
        </h3>
      </div>
      <h2 className="aboutUs__whatWeDo">
        What We Do
      </h2>
      <div className="aboutUs__pContainer">
        <p className="aboutUs__p">
          Pacific Wildlife Project is a grass roots organization founded in 1985 with the humane goal of wildlife protection and preservation through education, community outreach and rescue and medical treatment of all wild species. Community volunteers staff programs, rescue and care for distressed animals and conduct other activities that support and encourage conservation, wildlife protection and environmental awareness.
        </p>
        <p className="aboutUs__p">
          <img src={pelRelease} alt="baby opossum" className="aboutUs__babyPos"/>
          The Project's primary activity is the care and rehabilitation of orphaned and injured wildlife, of all species, by expert veterinarians. Our medical team includes specialists in wildlife medicine who generously volunteer their time and expertise to help ailing wild animals. Under the supervision and direction of founder and Wildlife Care Specialist, Linda McLeod-Evans, volunteers are trained as Wildlife Medics to provide foster care to orphan birds and mammals and nursing care for injured patients through the recovery and rehabilitation phase of their hospital stay. Recovered animals are returned to the wild into carefully selected habitats when their treatment at the Center is complete. Each year, volunteers at the Project care for thousands of birds and mammals. Although Pacific Wildlife Project is best known for its expertise in the care of endangered California Brown Pelicans, we proudly care for all wild animals that need our help.
        </p>
        <p className="aboutUs__p">
          Operation Pelican Watch was the Project's field rescue program formed in 1992. Volunteers patrolled lakes, beaches and harbors to find and rescue pelicans and other seabirds and bring them to the Center for treatment. Hundreds of seabirds every year are victims of human carelessness or abuse and are injured by fish line, hooks, and plastic debris. Without rescue and care, these birds usually die from infection and starvation. With intervention, 85% of the rescued birds recover and are returned to the wild.
        </p>
        <p className="aboutUs__p">
          Since that time, Operation Pelican Watch has evolved to the Seabird Rescue Team and the Waterfowl Rescue Team. The Seabird Recue team is responsible for patrolling areas along beaches and the Waterfowl rescue team is responsible for patrolling lakes, streams, rivers, and ponds. Together, they are able to cover a huge radius and rescue other animals that might of otherwise been left for the worst.
          <img src={racoonPair} alt="racoon pair" className="aboutUs__racoonPair"/>
        </p>
        <p className="aboutUs__p">
          The Project has been a key agency in crisis response and has rescued wildlife during fires and severe weather events, assisted agencies in emergency care of birds affected by fuel and crude oil, and responded for more than seven consecutive years to "the Worst Brown Pelican Die off in the Nation's History" - the botulism outbreak at the Salton Sea. Pacific Wildlife Project, the lead agency in that disaster event, trained U.S. Fish & Wildlife Service personnel, established treatment and response protocols and rallied over two hundred community volunteers to successfully rescue and treat over 4000 Pelicans. The Project was subsequently honored with the <span className="aboutUs__bold">Special Recognition Award</span> from the United States Department of the Interior for its contribution to the nation's endangered wildlife. <span className="aboutUs__bold">Pacific Wildlife Project's team of volunteers currently has the distinction of treating more pelicans than any facility worldwide!</span>
        </p>
        <p className="aboutUs__p">
          The Project provides telephone counseling to the public for all wildlife related issues. A resource for radio, television, and print media, medical staff and wildlife care experts educate the public on wildlife issues. Volunteers present programs and exhibits for community groups, schools and community events. Help and information brochures are published and distributed throughout the community including; animal shelters, veterinary offices, and harbor locations. Volunteer Programs give animal loving citizens the opportunity to learn about and help animals, pursue internships, course credits, community service hours, and job training.  The Project also contributes to the community through opportunities for teen, senior and handicapped volunteers, as well as special projects for at-risk juveniles.  Participation in legislative and animal protection issues promote a healthy future for our precious wildlife.  The Project helps people and agencies through community education to promote humane treatment, personal responsibility and involvement in wildlife protection issues.
        </p>
      </div>
    </div>
  )
}
