import { Cards } from "./Cards"

import spring from "@/assets/images-skills/Spring Boot.png"
import nest from "@/assets/images-skills/NestJS.png"
import net from "@/assets/images-skills/NET.png"
import django from "@/assets/images-skills/Django.png"
import xpress from "@/assets/images-skills/Express.png"

import angular from "@/assets/images-skills/Angular.png"
import next from "@/assets/images-skills/Next.js.png"
import react from "@/assets/images-skills/React.png"
import flutter from "@/assets/images-skills/Flutter.png"
import android from "@/assets/images-skills/Android.png"

import docker from "@/assets/images-skills/Docker.png"
import kubernetes from "@/assets/images-skills/Kubernetes.png"
import azure from "@/assets/images-skills/Microsoft Azure.png"
import figma from "@/assets/images-skills/Figma.png"



const backend = [
  spring,
  nest,
  net,
  django,
  xpress
];

const frontend = [
  angular,
  next,
  react,
  flutter,
  android
]

const otros = [
  docker,
  kubernetes,
  azure,
  figma
]

export const Skills = () => {

  return (
    <div className="flex flex-1 flex-col my-7">
      <div className="flex flex-1 min-w-60 max-h-28 min-h-20">
        <span className="text-3xl font-bold tracking-widest max-md:text-2xl">Skills</span>
      </div>
      <div className="flex flex-1 items-center flex-col flex-wrap min-w-60 my-3">
        <Cards name="B A C K E N D" imagen={ backend }/>
        <Cards name="F R O N T E N D" imagen={ frontend }/>
        <Cards name="O T R O S" imagen={ otros }/>
      </div>
    </div>
  )
}
