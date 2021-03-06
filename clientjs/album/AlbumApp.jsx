import React from 'react';
import { SquareThumbnail } from './Thumbnail.jsx'

export class Title extends React.Component {
  render() {
    return (
      <div className="title">{this.props.title}</div>
    );
  }
}


export class GyazoImage extends React.Component {
  render() {
    return (
      <a href={this.props.href} target="_blank" src={this.props.src}>
        <img className="photo" src={this.props.src} title={this.props.gyazoImgId} />
      </a>
    );
  }
}

export class GyazoImageList extends React.Component {
  componentDidMount() {
    this.props.loadGyazoItems(this.props.perPage);
  }

  render() {
    if (this.props.progress) {
      // 取得中
      return (
        <div>{this.props.text}</div>
      )
    }else {
      var thumbnails = [];
      for (let j = 0; j < this.props.images.length; j++) {
        let item = this.props.images[j];
        let id = item.image_id;
        let t = item.thumb_url;
        let i = item.url;
        let p = item.permalink_url;
        thumbnails.push(<SquareThumbnail
          handleClick={this.props.listImageClick}
          key={id} t={t} i={i} p={p} t_id={id}/>)
      }

      return (
        <div>
          <div className="status">{this.props.text}</div>
          <div className="thumbnails">{thumbnails}</div>
        </div>
      )
    }
  }
}


export class Description extends React.Component {
  render() {
    return (
      <div className="description">{this.props.text}</div>
    );
  }
}

export class Hashtags extends React.Component {
  render() {
    return (
      <div className="tags">#Gyazo</div>
    );
  }
}