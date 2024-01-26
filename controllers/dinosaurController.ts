import prisma from '@/prisma.ts';
import { RouterContext } from '@/deps.ts';

export const getAllDinosaurs = async ({
  response,
}: RouterContext<string>) => {
  const dinosaurs = await prisma.dinosaur.findMany();

  response.body = dinosaurs;
};

export const findDinosaur = async ({
  params,
  response,
}: RouterContext<string>) => {
  const { id } = params;

  const dinosaur = await prisma.dinosaur.findUniqueOrThrow({
    where: {
      id: Number(id),
    },
  });

  response.body = dinosaur;
};

export const createDinosaur = async ({
  request,
  response,
}: RouterContext<string>) => {
  const { name, description } = await request.body().value;

  const dinosaur = await prisma.dinosaur.create({
    data: {
      name,
      description,
    },
  });

  response.body = dinosaur;
};

export const updateDinosaur = async ({
  params,
  request,
  response,
}: RouterContext<string>) => {
  const { id } = params;
  const { name, description } = await request.body().value;

  const dinosaur = await prisma.dinosaur.update({
    where: { id: Number(id) },
    data: {
      name,
      description,
    },
  });

  response.body = dinosaur;
};

export const deleteDinosaur = async ({
  params,
  response,
}: RouterContext<string>) => {
  const { id } = params;

  const dinosaur = await prisma.dinosaur.delete({
    where: {
      id: Number(id),
    },
  });

  response.body = dinosaur;
};
