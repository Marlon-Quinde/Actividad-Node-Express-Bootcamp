import { Request, Response } from 'express';
import { Task } from '../models/Task';

export class TaskController {
  static async getAllTasks(req: Request, res: Response) {
    try {
      const tasks = await Task.findAll();
      res.json(tasks);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener las tareas' });
    }
  }

  static async getTaskById(req: Request, res: Response) {
    try {
      const task = await Task.findByPk(req.params.id);
      if (!task) {
        return res.status(404).json({ error: 'Tarea no encontrada' });
      }
      res.json(task);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener la tarea' });
    }
  }

  static async createTask(req: Request, res: Response) {
    try {
      const task = await Task.create(req.body);
      res.status(201).json(task);
    } catch (error) {
      res.status(400).json({ error: 'Error al crear la tarea' });
    }
  }

  static async updateTask(req: Request, res: Response) {
    try {
      const task = await Task.findByPk(req.params.id);
      if (!task) {
        return res.status(404).json({ error: 'Tarea no encontrada' });
      }
      await task.update(req.body);
      res.json(task);
    } catch (error) {
      res.status(400).json({ error: 'Error al actualizar la tarea' });
    }
  }

  static async deleteTask(req: Request, res: Response) {
    try {
      const task = await Task.findByPk(req.params.id);
      if (!task) {
        return res.status(404).json({ error: 'Tarea no encontrada' });
      }
      await task.destroy();
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: 'Error al eliminar la tarea' });
    }
  }
} 