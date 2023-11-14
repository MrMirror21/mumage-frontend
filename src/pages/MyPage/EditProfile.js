import Modal from 'react-modal';
import { useDropzone } from 'react-dropzone';

import React, { useRef, useEffect, useState } from 'react';
import { useSetRecoilState } from 'recoil';

import { getSavedProfileImage } from '../../utils/FetchDataRecoil';

import AvatarEditor from 'react-avatar-editor';
import styled from 'styled-components';

const EditProfile = ({ modalIsOpen, setModalIsOpen, setIsSideOpen, isSideOpen }) => {
    useEffect(() => {
        modalIsOpen ? setIsSideOpen(false) : setIsSideOpen(isSideOpen)
    }, [modalIsOpen]);

    const [file, setFile] = useState("");
    const [isClicked, setIsClicked] = useState(false);
    const editorRef = useRef(null);
    const setSavedImage = useSetRecoilState(getSavedProfileImage);

    const { getRootProps, getInputProps } = useDropzone({
        accept: {
            'image/*': []
        },
        onDrop: acceptedFiles => {
            setFile(Object.assign(acceptedFiles, {
                preview: URL.createObjectURL(acceptedFiles[0])
            }));
        },
        noClick: isClicked,
    });

    const handleReset = () => {
        setIsClicked(false);
        setFile("");
        setSavedImage(null);
    }

    const handleSave = () => {
        if (editorRef.current) {
            const canvas = editorRef.current.getImageScaledToCanvas().toDataURL();
            setSavedImage(canvas);
        }
    }
    //getRootPros : dropzone의 클릭, 드래그 등 각종 이벤트에 대응하는 함수
    //getInputProps : input에게 주슨 속성이 정의되어 있음
    //isDragActive : Dropzone 위에 파일이 감지되었을 때 true로 바뀜
    const thumbs = (
        <div key={file.name} >
            <div>
                <AvatarEditor
                    ref={editorRef}
                    image={file.preview}
                    width={100}
                    height={100}
                    border={0}
                    color={[256, 256, 256, 0.9]} // RGBA
                    scale={1}
                    rotate={0}
                    style={{ border: "1px solid #262626", borderRadius: "10em" }}
                />
            </div>
        </div>
    );
    useEffect(() => {
        // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
        return () => URL.revokeObjectURL(file.preview);
    }, [file]);

    return (
        <Modal style={customStyles} isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} appElement={document.getElementById('root')} >
            <Frame>
                <Header>Edit Profile</Header>
                <div {...getRootProps()} >
                    <input {...getInputProps()} />
                    {thumbs}
                </div>

                <button onClick={() => handleReset()}>Reset</button>
                {file ? <button onClick={handleSave}>Save</button> : null}
                <button onClick={() => setModalIsOpen(false)}>Exit</button>
            </Frame>

        </Modal>

    );
}

export default EditProfile;

const customStyles = {
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // 배경 색 및 투명도 조절
    },
    content: {
        backgroundColor: '#fff', // Modal 내용 영역 배경 색
        padding: '20px',
        borderRadius: '8px',
        maxWidth: '400px',
        margin: 'auto',
    },
};

const Frame = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Header = styled.div`
    width: 100%;
    text-align: center;
    border: 1.5px solid #262626;
    margin-bottom: 20px;
    padding: 8px;
    border-radius: 3em;
    background: #262626;
    color: white;
    
`
