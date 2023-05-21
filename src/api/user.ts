import express from "express";
import { AppDataSource } from "../data-source";
import { User } from "../entity/user";

const router = express.Router();
const userRepositiry = AppDataSource.getRepository(User);

// 获取所有用户
router.get("/", async (req, res) => {
  // TODO: 参数校验
  try {
    const filter = req.query;
    const list = await userRepositiry.findBy({ ...filter });
    res.json({ success: true, message: 'success', data: list });
  } catch (error) {
    res.json({ success: false, message: error || '获取用户列表失败' })
  }
})

// 新增用户
router.put("/", async (req, res) => {
  // TODO：参数校验、数据库重复校验

  try {
    console.log("user: ", req.body)
    const item = req.body;
    await userRepositiry.save(item);
    res.json({ success: true, message: 'success' })
  } catch (error) {
    res.json({ success: false, message: error || '新增用户失败' })
  }
})

export default router;