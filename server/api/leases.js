const router = require('express').Router()
const {Lease, LeaseOption, LeaseVersion} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    if (req.user) {
      const leases = await Lease.findAll({
        include: [
          {
            model: LeaseVersion,
            include: [LeaseOption]
          }
        ],
        where: {
          userId: req.user.id
        }
      })
      res.json(leases)
    } else {
      res.status(404).json()
    }
  } catch (err) {
    next(err)
  }
})

// router.get('/:leaseId', async (req, res, next) => {
//   try {
//     if (req.user) {
//       const leases = await Lease.findOne({
//         include: [
//           {
//             model: LeaseVersion,
//             include: [
//               LeaseOption
//             ]
//           }
//         ],
//         where: {
//           userId: req.user,
//           id: req.params.leaseId
//         }
//       })
//       res.json(leases)
//     } else {
//       res.status(404).json()
//     }
//   } catch (err) {
//     next(err)
//   }
// })

// router.post('/', async (req, res, next) => {
//   try {
//     if (req.user) {
//       const lease = await Lease.create(req.body, {
//         include: [{
//           model: LeaseVersion,
//           include: [LeaseOption]
//         }]
//       })
//     if (lease) {
//       res.json(lease)
//     }
//     }
//   } catch (err) {
//     next(err)
//   }
// })
