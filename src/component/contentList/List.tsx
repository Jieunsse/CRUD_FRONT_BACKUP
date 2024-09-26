
import { useState } from 'react';
import axios from 'axios';

interface Review {
    id: number;
    title: string;
    content: string;
}

const List = () => {

    const url = 'http://localhost:8080/list';

    const [reviewList, setReviewList] = useState<Review[]>([]);


    axios.get(url)
        .then((res) => {
            setReviewList(res.data);
            console.log("응답 완료");
        })
        .catch((err) => console.log(err));

    return(
      <>
        <div>
            리뷰 리스트
        </div>
          <div>
              {reviewList.map((item) => (
                  <div key={item.id}> <br/>
                      게시글 제목 : {item.title}    <br/>
                      게시글 내용 : {item.content}
                  </div>
              ))}
          </div>
      </>
    );
}

export default List;