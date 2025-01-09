import { RecentPostItem } from "./RecentPostItem";

const recentPost = [
  { id: 1, title: "Post 1", dateTime: "2023-10-01T10:00:00Z" },
  { id: 2, title: "Post 2", dateTime: "2023-10-02T11:00:00Z" },
  { id: 3, title: "Post 3", dateTime: "2023-10-03T12:00:00Z" },
  { id: 4, title: "Post 4", dateTime: "2023-10-04T13:00:00Z" },
  { id: 5, title: "Post 5", dateTime: "2023-10-05T14:00:00Z" },
  { id: 6, title: "Post 6", dateTime: "2023-10-06T15:00:00Z" },
];

export const RecentPostsWidget = () => {
  return (
    <>
      <div className="recent-posts-widget widget-item">
        <h3 className="widget-title">Recent Posts</h3>

        {recentPost.map(({ id, title, dateTime }) => (
          <RecentPostItem key={id} title={title} dateTime={dateTime} />
        ))}

        {/* End recent post item*/}
      </div>
    </>
  );
};
