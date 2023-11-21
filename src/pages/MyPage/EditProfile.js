import Modal from 'react-modal';
import { useDropzone } from 'react-dropzone';
import { IoMdAddCircle } from "react-icons/io";

import React, { useRef, useEffect } from 'react';
import useConfirm from '../../hooks/confirm';
import { useSetRecoilState, useRecoilState } from 'recoil';

import { getSavedFileImage, getFavoriteGenre } from '../../utils/FetchDataRecoil';
import AvatarEditor from 'react-avatar-editor';
import styled from 'styled-components';
import { useState } from 'react';

import { ReactComponent as ProfileIcon } from "../../assets/Profile.svg";
import { usersDataState } from '../../store/ServerData';



const EditProfile = ({ onRequestClose, modalIsOpen, setIsSideOpen, isSideOpen, user, setUser }) => {
    useEffect(() => {
        modalIsOpen ? setIsSideOpen(false) : setIsSideOpen(isSideOpen);
    }, [modalIsOpen, setIsSideOpen, isSideOpen]);
    const [file, setFile] = useRecoilState(getSavedFileImage);
    const editorRef = useRef(null);
    const [users, setUsers] = useRecoilState(usersDataState);

    const { getRootProps, getInputProps } = useDropzone({
        accept: {
            'image/*': []
        },
        onDrop: acceptedFiles => {
            setFile(Object.assign(acceptedFiles, {
                preview: URL.createObjectURL(acceptedFiles[0])
            }));
        },
    });

    const action = () => {
        setFile("");

        setUser(prev => ({
            ...prev,
            "profileUrl": ProfileIcon,
        }));
        setUsers((prev) => {
            return prev.map((p) => {
                if (p["userId"] === user["userId"]) {
                    return {
                        ...p,
                        "profileUrl": ProfileIcon,
                    };
                }
                return p;
            })
        })
        onRequestClose();
    }

    const actionAll = () => {
        setFile("");
        onRequestClose();
        setFavoriteGenre(["", "", ""]);
        setUser(prev => ({
            ...prev,
            "profileUrl": ProfileIcon,
            "genres": [],
        }));
        setUsers((prev) => {
            return prev.map((p) => {
                if (p["userId"] === user["userId"]) {
                    return {
                        ...p,
                        "genres": [],
                        "profileUrl": ProfileIcon,
                    };
                }
                return p;
            })
        })
    }

    const confirmDelete = useConfirm(
        "Reset Profile?",
        action,
    );

    const confirmDeleteAll = useConfirm(
        "Reset All?",
        actionAll,
    )

    const setFavoriteGenre = useSetRecoilState(getFavoriteGenre);
    const [firstValue, setFirstValue] = useState("");
    const [secondValue, setSecondValue] = useState("");
    const [thirdValue, setThirdValue] = useState("");

    const handleReset = () => {
        confirmDelete();
    }

    const handleResetAll = () => {
        confirmDeleteAll();
    }

    const handleSave = () => {
        if (editorRef.current) {
            const canvas = editorRef.current.getImageScaledToCanvas().toDataURL();
            setUser(prev => ({
                ...prev,
                "profileUrl": canvas,
                "genres": [firstValue, secondValue, thirdValue],
            }));
            setFavoriteGenre([firstValue, secondValue, thirdValue]);
            setUsers((prev) => {
                return prev.map((p) => {
                    if (p["userId"] === user["userId"]) {
                        return {
                            ...p,
                            "genres": [firstValue, secondValue, thirdValue],
                            "profileUrl": canvas,
                        };
                    }
                    return p;
                })
            })
            alert("Done!");
            onRequestClose();
        }
    }
    //getRootPros : dropzone의 클릭, 드래그 등 각종 이벤트에 대응하는 함수
    //getInputProps : input에게 주슨 속성이 정의되어 있음
    //isDragActive : Dropzone 위에 파일이 감지되었을 때 true로 바뀜
    const thumbs = (
        <div key={file.name} >
            <div>
                <AvatarEditor
                    key={file ? file.name : "setted-image"}
                    ref={editorRef}
                    image={file ? file.preview : typeof (user["profileUrl"]) === 'string' ? user["profileUrl"] : require('../../assets/Profile.svg').default}
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

    return (
        <Modal style={customStyles} isOpen={modalIsOpen} onRequestClose={onRequestClose} appElement={document.getElementById('root')} >
            <Frame>
                <Header>Edit Profile</Header>
                {thumbs}
                <div {...getRootProps()} >
                    <input {...getInputProps()} />
                    <EditButton />
                </div>

                <SecondHeader>Favorite Genres?</SecondHeader>
                <form>
                    <InputSection>
                        <div>#First</div>
                        <Input
                            type="text"
                            value={firstValue}
                            onChange={e => setFirstValue(e.target.value)}
                        />
                    </InputSection>
                    <InputSection>
                        <div>#Second</div>
                        <Input
                            type="text"
                            value={secondValue}
                            onChange={e => setSecondValue(e.target.value)}
                        />
                    </InputSection>
                    <InputSection>
                        <div>#Third</div>
                        <Input
                            type="text"
                            value={thirdValue}
                            onChange={e => setThirdValue(e.target.value)}
                        />
                    </InputSection>
                </form>

                <BottomNavigation>
                    <ResetButton onClick={() => handleReset()}>Reset</ResetButton>
                    <SaveExitButton onClick={() => handleSave()}>Save & Exit</SaveExitButton>
                    <ResetButton onClick={handleResetAll}>Reset all</ResetButton>
                </BottomNavigation>
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

const SecondHeader = styled.h3`
    margin-top: 1em;
    text-align: center;
    align-items: center;
    border-bottom: 3px dotted #000;
    line-height: 2em;
    width: 210px;
`

const EditButton = styled(IoMdAddCircle)`
    width: 2em;
    height: 2em;
    &:hover {
    color: #696969;
    transition: 0.3s;
    width: 2.3em;
    height: 2.3em;
  }
`
const ResetButton = styled.button`
    background: white;
    color: #696969;
    border: none;
    &:hover {
        border-bottom: 1px solid #000;
        color: #000;
        transition: 0.1s;
        

`

const SaveExitButton = styled.button`
    color: white;
    padding-right: 10px;
    padding-left: 10px;
    padding-top: 10px;
    padding-bottom: 10px;
    background: #262626;
    border-radius: 5em;
    border: none;
    &:hover {
        color: #696969;
        transition: 0.1s;
`

const BottomNavigation = styled.div`
    margin-top: 4em;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
`

const Input = styled.input`
    width: 20em;
    height: 32px;
    font-size: 15px;
    border: 0;
    border-radius: 15px;
    outline: none;
    padding-left: 10px;
    background-color: rgb(233, 233, 233);
`

const InputSection = styled.div`
        margin-top: 1em;
`