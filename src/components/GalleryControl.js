import React from "react";
import GalleryDescription from './GalleryDescription';
import GalleryTitle from './GalleryTitle';
import GalleryImage from './GalleryImage';
import NewsLetterSignUp from './NewsLetterSignUp';
import PageCount from './PageCount';
import SocialMedia from './SocialMedia';
import TipJar from './TipJar';

class GalleryControl extends React.Component {
    constructor() {
        super();
        this.state = {
            galleryVisible: 'cover'
        };
    }
    
    handleClick = (visible) => {
        console.log(visible)
        this.setState({galleryVisible: visible});
    }
    
    render() {
        const comics = this.props.comics
        const chapters = this.props.chapters
        const pages = this.props.pages

        const galleryStyles = {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center'
        }
        
        const comicCoverStyle = {
        margin: '15px',
        padding: '5px',
        outlineStyle: 'double',
        outlineWidth: 'medium',
        outlineColor: 'white',
        }
        
        const comicChpStyle = {
        width: '100%',
        height: '100%',
        maxWidth: '125px',
        maxHeight: '325px',
        margin: '10px',
        padding: '5px',
        outlineStyle: 'double',
        outlineWidth: 'medium',
        outlineColor: 'white',
        }

        const comicPageStyle = {
        width: '100%',
        height: '100%',
        margin: '5px',
        padding: '5px',
        }
        
        const comicCoverGallery = comics.map((comic) => (
        <figure style={comicCoverStyle} onClick={() => this.handleClick('chapter')} className={'click'} key={comic.NO_ID_FIELD}>
            <GalleryTitle title={comic.title}/>
            <GalleryImage url={comic.titleUrl} imgHeight={'400px'} objectFit={'scale-down'}/>
            <GalleryDescription description={comic.description} textWidth={'200px'}/>
        </figure>
        ))
        
        const comicChpGallery = chapters.map((chapter) =>(
        <figure style={comicChpStyle} onClick={() => this.handleClick('page')} className={'click'} key={chapter.NO_ID_FIELD}>
            <GalleryTitle title={chapter.name}/>
            <GalleryImage url={chapter.pageUrl} imgHeight={'150px'} objectFit={'none'}/>
            <GalleryDescription description={chapter.description}/>
            <PageCount chpStart={chapter.chpStart} chpEnd={chapter.chpEnd}/>
        </figure>
        ))
        
        const comicPageGallery = pages.map((page) => (
        <figure style={comicPageStyle} key={page.NO_ID_FIELD}>
            <GalleryImage url={page.pageUrl} imgHeight={'100%'} objectFit={'scale-down'}/>
        </figure>

        ))

        let currentlyVisibleState = null;
        if (this.state.galleryVisible === 'cover') {
        currentlyVisibleState = comicCoverGallery
        } else if (this.state.galleryVisible === 'chapter') {
        currentlyVisibleState = comicChpGallery
        } else if (this.state.galleryVisible === 'page') {
        currentlyVisibleState = comicPageGallery
        } else {
        currentlyVisibleState = <h2>something went wrong</h2>
        }

        return (
            <div>
                <h2>Comics</h2>
                <h3>Title</h3>
                <div className={"flexContainer"}>
                    <div className={"flexItem-a"}>
                    <div style={galleryStyles} className={"grid"}>
                    {currentlyVisibleState}
                    </div>
                    </div>
                    <div className={"flexItem-b"}>
                    <div>
                        <NewsLetterSignUp/>
                    </div>
                    <div>
                        <SocialMedia/>
                    </div>
                    <div>
                        <TipJar/>
                    </div>
                    </div>
                </div>
                </div>
            );
        
        }
  }

export default GalleryControl;