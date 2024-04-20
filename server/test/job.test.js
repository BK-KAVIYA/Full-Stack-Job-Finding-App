// job.test.js
import { getJobPosts } from '../controllers/jobController'; // Import the API function
import Jobs from '../models/jobsModel'; // Import the Jobs model

// Mocking req, res, and next objects
const req = {
  query: {
    search: 'software engineer',
    sort: 'Newest',
    location: 'Matara',
    jtype: 'full-time',
    exp: '2-6',
    page: 1,
    limit: 10,
  },
};

const res = {
  status: jest.fn(() => res),
  json: jest.fn(),
};

const next = jest.fn();

// Mocking Jobs.find method
Jobs.find = jest.fn().mockReturnValue({
  populate: jest.fn().mockReturnThis(),
  sort: jest.fn().mockReturnThis(),
  limit: jest.fn().mockReturnThis(),
});

Jobs.countDocuments = jest.fn().mockResolvedValue(20); // Mocking countDocuments method

describe('getJobPosts function', () => {
  beforeEach(() => {
    jest.clearAllMocks(); // Clear mock calls before each test
  });

  it('should fetch job posts with correct query parameters', async () => {
    await getJobPosts(req, res, next);

    expect(Jobs.find).toHaveBeenCalledWith({
      location: { $regex: 'Matara', $options: 'i' },
      jobType: { $in: ['full-time'] },
      experience: { $gte: 2, $lte: 6 },
      $or: [
        { jobTitle: { $regex: 'software engineer', $options: 'i' } },
      ],
    });

    expect(Jobs.find().populate).toHaveBeenCalledWith({
      path: 'company',
      select: '-password',
    });

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({
      success: true,
      totalJobs: 20,
      data: expect.any(Array),
      page: 1,
      numOfPages: Math.ceil(20 / req.query.limit),
    });
  });
});
