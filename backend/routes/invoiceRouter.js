import { clerkMiddleware } from "@clerk/express";
import express from "express";
import { 
  getInvoices, 
  createInvoice, 
  getInvoiceById, 
  updateInvoice, 
  deleteInvoice 
} from "../controllers/invoiceController.js";

const invoiceRouter = express.Router();
invoiceRouter.use(clerkMiddleware());

invoiceRouter.get("/", getInvoices);
invoiceRouter.post("/", createInvoice);
invoiceRouter.get("/:id", getInvoiceById);
invoiceRouter.put("/:id", updateInvoice);
invoiceRouter.delete("/:id", deleteInvoice);

export default invoiceRouter;