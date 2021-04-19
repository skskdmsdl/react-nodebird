import React, { useCallback, useRef, useEffect } from "react";
import { Form, Input, Button } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { addPost } from '../reducers/post';
import useInput from "../hooks/useInput";

const PostForm = () => {
    const { imagePaths, addPostDone } = useSelector((state) => state.post);
    const dispatch = useDispatch();
    const [text, onChangeText, setText] = useInput('');

    useEffect(() => {
        if(addPostDone) {
            setText('');            // submit 시 inputText 초기화
        }
    }, [addPostDone]);

    const onSubmit = useCallback(() => {
        dispatch(addPost(text));      // 원래 dispatch 자리에는 객체가 들어가는게 맞음
    }, [text]);

    const imageInput = useRef();
    // 버튼 눌러서 사진 업로드창 띄우기
    const onClickImageUpload = useCallback(() => {
        imageInput.current.click();
    }, [imageInput.current]);
    console.log("@@", imagePaths);

    return (
        <Form style={{ margin: '10px 0 20px' }} encType="multipart/form-data" onFinish={onSubmit}>
            <Input.TextArea
                value={text} 
                onChange={onChangeText}
                maxLength={140}
                placeholder="어떤 신기한 일이 있었나요?"
            />
            <div>
                <input type="file" multiple hidden ref={imageInput} />
                <Button onClick={onClickImageUpload} >이미지 업로드</Button>
                <Button type="primary" style={{ float: "right" }} htmlType="submit">짹짹</Button>
            </div>
            <div>
                {/* {imagePaths.map((v) => (
                    <div key={v} style={{ display: 'inline-block' }}>
                        <img src={v} style={{ width: '200px' }} alt={v} />
                        <div>
                            <Button>제거</Button>
                        </div>
                    </div>
                ))} */}
            </div>
        </Form>
    )
};

export default PostForm;