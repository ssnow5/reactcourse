import { MongoClient, ObjectId } from "mongodb";
import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails(props) {
  // return (
  // <MeetupDetail
  //   image="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Elba_One_Blackfriars.jpg/1280px-Elba_One_Blackfriars.jpg"
  //   title="A First Meetup"
  //   address="Some Street 5, Some City"
  //   description="The meetup description"
  // />

  // );

  return (
    <MeetupDetail
      image={props.meetupData.image}
      title={props.meetupData.title}
      address={props.meetupData.address}
      description={props.meetupData.description}
    />
  );
}

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    "mongodb+srv://reactcourse:6ePlv1mbTWtu@cluster0.rtpnmta.mongodb.net/meetups?retryWrites=true&w=majority&appName=Cluster0"
  );

  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();

  client.close();

  return {
    fallback: false,
    //paths: [{ params: { meetupId: "m1" } }, { params: { meetupId: "m2" } }],
    paths: meetups.map((meetup) => ({
      params: { meetupId: meetup._id.toString() },
    })),
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;
  //console.log(meetupId);

  const client = await MongoClient.connect(
    "mongodb+srv://reactcourse:6ePlv1mbTWtu@cluster0.rtpnmta.mongodb.net/meetups?retryWrites=true&w=majority&appName=Cluster0"
  );

  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const selectedMeetup = await meetupsCollection.findOne({
    _id: new ObjectId(meetupId),
  });
  client.close();

  return {
    props: {
      // meetupData: {
      //   id: meetupId,
      //   image:
      //     "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Elba_One_Blackfriars.jpg/1280px-Elba_One_Blackfriars.jpg",
      //   title: "A First Meetup",
      //   address: "Some Street 5, Some City",
      //   description: "The meetup description",
      // },

      meetupData: {
        id: selectedMeetup._id.toString(),
        title: selectedMeetup.title,
        address: selectedMeetup.address,
        image: selectedMeetup.image,
        description: selectedMeetup.description,
      },
    },
  };
}

export default MeetupDetails;