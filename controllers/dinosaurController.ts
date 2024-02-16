import { RouterContext, Status } from '@/deps.ts';
import dinosaurRepository from '@/repositories/dinosaurRepository.ts';

export const getAllDinosaurs = async ({
  response,
}: RouterContext<string>) => {
  const dinosaurs = await dinosaurRepository.getAll();

  response.body = dinosaurs;
};

export const findDinosaur = async ({
  params,
  response,
  throw: throw_,
}: RouterContext<string>) => {
  const { id } = params;

  const dinosaur = await dinosaurRepository.getById(Number(id));

  if (!dinosaur) {
    throw_(Status.NotFound, 'Dinosaur not found');
  }

  response.body = dinosaur;
};

export const createDinosaur = async ({
  request,
  response,
}: RouterContext<string>) => {
  const { name, description } = await request.body.json();

  const dinosaur = await dinosaurRepository.create({ name, description });

  response.body = dinosaur;
};

export const updateDinosaur = async ({
  params,
  request,
  response,
}: RouterContext<string>) => {
  const { id } = params;
  const { name, description } = await request.body.json();

  const dinosaur = await dinosaurRepository.update(Number(id), {
    name,
    description,
  });

  response.body = dinosaur;
};

export const deleteDinosaur = async ({
  params,
  response,
}: RouterContext<string>) => {
  const { id } = params;

  await dinosaurRepository.delete(Number(id));

  response.body = { message: 'Dinosaur deleted' };
};
