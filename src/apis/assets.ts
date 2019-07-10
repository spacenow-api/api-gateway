import { Router, Request, Response, NextFunction } from "express";
import { AxiosInstance } from "axios";
import FormData from "form-data";
import fs from "fs";

import upload from "../services/image.upload.service";

import apiAdapter from "../helpers/adapter/apiAdapter";

class Assets {
  private api: AxiosInstance;

  private base_url: string;

  private path = "/assets";

  private router = Router();

  constructor(apiHost: string) {
    this.base_url = apiHost;
    this.api = apiAdapter(this.base_url);
    this.intializeRoutes();
  }

  private intializeRoutes() {
    this.router.get(this.path, this.getAllAssets);
    this.router.get(`${this.path}/:id`, this.getAsset);
    this.router.post(`${this.path}/:folder`, this.createAsset);
  }

  private getAllAssets = async (
    request: Request,
    response: Response,
    next: NextFunction
  ) => {
    try {
      const resp = await this.api.get(request.path, {
        headers: request.headers
      });
      response.send(resp.data);
    } catch (error) {
      response.send(error.response.data);
    }
  };

  private getAsset = async (
    request: Request,
    response: Response,
    next: NextFunction
  ) => {
    try {
      const resp = await this.api.get(request.path, {
        headers: request.headers
      });
      response.send(resp.data);
    } catch (error) {
      response.send(error.response.data);
    }
  };

  private createAsset = async (
    request: Request,
    response: Response,
    next: NextFunction
  ) => {
    try {
      await upload.single("file")(request, response, async err => {
        if (err) response.send(err);
        else {
          const formData = new FormData();
          const file: any = request.file;
          formData.append("file", file.buffer, file.originalname);
          for (var key in request.body) {
            formData.append(key, request.body[key]);
          }
          try {
            const resp = await this.api.post(request.path, formData, {
              headers: formData.getHeaders()
            });
            response.send(resp.data);
          } catch (error) {
            response.send(error.response.data);
          }
        }
      });
    } catch (error) {
      response.send(error.response.data);
    }
  };
}

export default Assets;
