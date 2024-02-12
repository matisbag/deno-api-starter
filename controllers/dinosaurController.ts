import { RouterContext, Status } from '@/deps.ts';

export const getAllDinosaurs = async ({
  response,
}: RouterContext<string>) => {
  const dinosaurs = [{}];

  response.body = dinosaurs;
};

export const findDinosaur = async ({
  params,
  response,
  throw: throw_,
}: RouterContext<string>) => {
  const { id } = params;

  try {
    const dinosaur = {};

    response.body = dinosaur;
  } catch {
    throw_(Status.NotFound, 'Dinosaur not found');
  }
};

export const createDinosaur = async ({
  request,
  response,
}: RouterContext<string>) => {
  const { name, description } = await request.body.json();

  const dinosaur = {};

  response.body = dinosaur;
};

export const updateDinosaur = async ({
  params,
  request,
  response,
}: RouterContext<string>) => {
  const { id } = params;
  const { name, description } = await request.body.json();

  const dinosaur = {};

  response.body = dinosaur;
};

export const deleteDinosaur = async ({
  params,
  response,
}: RouterContext<string>) => {
  const { id } = params;

  const dinosaur = {};

  response.body = dinosaur;
};
