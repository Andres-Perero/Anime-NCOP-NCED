import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { URL } from "../config";
import styled from "../GridList.module.css";

export const GetCategory = () => {
  const { category } = useParams();
  const rute = useLocation().pathname;
  const [dataCategory, SetDataCategory] = useState();
  const newUrl = URL + rute + "/";
  const FetchDataCategory = async () => {
    const temp = await fetch(newUrl, {
      method: "POST",
    }).then((res) => res.json());
    SetDataCategory(temp.files);
  };

  useEffect(() => {
    FetchDataCategory();
  }, []);
  //Filters
  let videos = [];
  let musica = [];
  let filterData = (data) => {
    if (data !== undefined) {
      for (let iter in data) {
        if (data[iter].name.includes("mp3")) {
          musica.push(data[iter]);
        } else {
          videos.push(data[iter]);
        }
      }
    }
  };
  //filto en lista los tipos de contenido en la carpeta
  //actualmente MP3 and MP4 (musica y videos )
  filterData(dataCategory);
  return (
    <div>
      <div className={styled.container}>
        <div className={styled.cards}>
          {videos &&
            videos.map((item, index) => (
              <div key={index} className={styled.card}>
                {item.name.includes(".mp4") ||
                item.name.includes(".avi") ||
                item.name.includes(".mkv") ? (
                  <div>
                    <video
                      controls
                      preload="metadata"
                      className={styled.cardImgWrapper}
                    >
                      <source
                        src={newUrl + item.name}
                        type="video/x-matroska"
                      />
                      <source src={newUrl + item.name} type="video/mp4" />
                    </video>
                    <div className={styled.cardContent}>
                      <span className={styled.cardTitle}>{item.name}</span>
                    </div>
                  </div>
                ) : (
                  <div className={styled.cardContent}>
                    <Link
                      className={styled.titleLink}
                      to={`/${encodeURIComponent(
                        category
                      )}/${encodeURIComponent(item.name)}`}
                      state={item}
                    >
                      {item.name}{" "}
                    </Link>
                  </div>
                )}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
